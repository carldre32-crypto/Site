const photoRoot = "Fotos/Monte seu dummy/Dummys em pé sepaarados por cores";
const palette = [
  { name: "Amarelo", value: "#f5cb00", image: `${photoRoot}/Dummy Amarelo.png` },
  { name: "Azul", value: "#123d70", image: `${photoRoot}/Dummy Azul.png` },
  { name: "Preto", value: "#292c32", image: `${photoRoot}/Dummy Preto.png` },
  { name: "Rosa", value: "#e63891", image: `${photoRoot}/Dummy Rosa.png` },
  { name: "Verde", value: "#159b53", image: `${photoRoot}/Dummy Verde.png` },
  { name: "Vermelho", value: "#e33336", image: `${photoRoot}/Dummy Vermelho.png` }
];

const pieces = [
  { key: "head", label: "Cabeça", side: "right", top: "7%", mask: [[190, 36], [246, 40], [251, 112], [186, 112]] },
  { key: "torso", label: "Tronco", side: "left", top: "27%", mask: [[163, 113], [270, 113], [275, 225], [159, 225]] },
  { key: "arms", label: "Braços", side: "right", top: "37%", mask: [[118, 124], [187, 124], [184, 274], [114, 274], [245, 124], [316, 124], [319, 274], [248, 274]] },
  { key: "hands", label: "Mãos", side: "left", top: "43%", mask: [[105, 264], [151, 264], [151, 329], [105, 329], [281, 264], [327, 264], [327, 329], [281, 329]] },
  { key: "waist", label: "Cintura", side: "right", top: "48%", mask: [[163, 210], [273, 210], [275, 288], [159, 288]] },
  { key: "legs", label: "Pernas", side: "left", top: "66%", mask: [[150, 263], [224, 263], [220, 468], [149, 468], [211, 263], [284, 263], [284, 468], [216, 468]] },
  { key: "feet", label: "Pés", side: "right", top: "84%", mask: [[136, 468], [198, 468], [198, 578], [136, 578], [235, 468], [298, 468], [298, 578], [235, 578]] }
];

const accessoryChoices = {
  head: ["Sem acessório", "Dummy 13 Alternate Heads", "Dummy 13 More Heads", "Máscara de gás"],
  torso: ["Sem acessório", "Heavy Armor Kit", "Armor Plate Carrier", "Colete IOTV", "Chest Armour Pieces"],
  arms: ["Sem acessório", "Sword Arm", "Power Claw", "Back Fists Pack", "Extra Hand Poses"],
  hands: ["Sem acessório", "Back Fists Pack", "Extra Hand Poses", "Power Claw"],
  waist: ["Sem acessório", "Drop Leg Pistol Holster", "Drop Holsters"],
  legs: ["Sem acessório", "Spider Walker Mech Legs", "Leg Armor Roller", "Dummy 13 Boots"],
  feet: ["Sem acessório", "Dummy 13 Boots", "Spider Walker Mech Legs" ]
};

const canvas = document.querySelector("[data-dummy-canvas]");
const context = canvas.getContext("2d", { willReadFrequently: true });
const colorControls = document.querySelector("[data-color-controls]");
const partArrows = document.querySelector("[data-part-arrows]");
const activePartLabel = document.querySelector("[data-active-part]");
const activeAccessory = document.querySelector("[data-active-accessory]");
const selectionSummary = document.querySelector("[data-selection-summary]");
const fallbackImage = document.querySelector(".dummy-fallback");
const initialColor = palette[0];
let lastChangedColorKey = "head";
const selectedColors = Object.fromEntries(pieces.map(({ key }) => [key, initialColor]));
const selectedAccessories = Object.fromEntries(pieces.map(({ key }) => [key, 0]));
const colorImages = Object.fromEntries(palette.map((color) => [color.name, new Image()]));
palette.forEach((color) => {
  colorImages[color.name].addEventListener("load", renderDummy);
  colorImages[color.name].src = color.image;
});
const baseImage = colorImages[initialColor.name];

const pointInPolygon = (x, y, polygon) => {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const crosses = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
    if (crosses) inside = !inside;
  }
  return inside;
};

const regionForPixel = (x, y) => {
  const maskOrder = ["head", "hands", "arms", "waist", "torso", "feet", "legs"];
  for (const key of maskOrder) {
    const piece = pieces.find((item) => item.key === key);
    const polygons = piece.key === "arms" || piece.key === "hands" || piece.key === "legs" || piece.key === "feet"
      ? [piece.mask.slice(0, 4), piece.mask.slice(4, 8)]
      : [piece.mask];
    if (polygons.some((polygon) => pointInPolygon(x, y, polygon))) return piece.key;
  }
  return null;
};

const hexToRgb = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16)
});

const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > .5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return { h, s, l };
};

const hslToRgb = (h, s, l) => {
  if (s === 0) return [l * 255, l * 255, l * 255];
  const hue = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < .5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hue(p, q, h + 1 / 3) * 255, hue(p, q, h) * 255, hue(p, q, h - 1 / 3) * 255];
};

const renderDummy = () => {
  if (!baseImage.complete || !baseImage.naturalWidth) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  const sameColor = pieces.every(({ key }) => selectedColors[key].name === selectedColors.head.name);
  const exactPhoto = colorImages[selectedColors.head.name];
  if (sameColor && exactPhoto.complete && exactPhoto.naturalWidth) {
    fallbackImage.style.display = "none";
    canvas.style.display = "";
    context.drawImage(exactPhoto, 0, 0, canvas.width, canvas.height);
    return;
  }
  context.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

  let pixels;
  try {
    pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  } catch (error) {
    // Browsers restrict pixel reads from file:// images. Show the selected color photo
    // so a local preview still responds; hosted pages use the per-part recoloring below.
    if (error.name !== "SecurityError") throw error;
    fallbackImage.src = selectedColors[lastChangedColorKey].image;
    fallbackImage.style.display = "block";
    canvas.style.display = "none";
    return;
  }
  fallbackImage.style.display = "none";
  canvas.style.display = "";
  const data = pixels.data;
  const targetHsl = Object.fromEntries(pieces.map(({ key }) => [key, rgbToHsl(...Object.values(hexToRgb(selectedColors[key].value)))]));
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const index = (y * canvas.width + x) * 4;
      const alpha = data[index + 3];
      if (alpha < 12) continue;
      const region = regionForPixel(x, y);
      if (!region) continue;
      const r = data[index], g = data[index + 1], b = data[index + 2];
      // Recolor only the bright yellow plastic; joints and dark outlines stay intact.
      if (r < 58 || g < 38 || r < b * 1.35 || g < b * 1.1) continue;
      const source = rgbToHsl(r, g, b);
      const target = targetHsl[region];
      const lightness = Math.max(.035, Math.min(.96, target.l * (.74 + (source.l - .58) * .85)));
      const [nextR, nextG, nextB] = hslToRgb(target.h, target.s, lightness);
      data[index] = nextR; data[index + 1] = nextG; data[index + 2] = nextB;
    }
  }
  context.putImageData(pixels, 0, 0);
};

const renderColorControls = () => {
  colorControls.innerHTML = pieces.map(({ key, label }) => `
    <div class="color-row">
      <label for="color-${key}">${label}</label>
      <button class="color-step" type="button" data-color-step="-1" data-color-key="${key}" aria-label="Cor anterior para ${label}">‹</button>
      <select class="color-select" id="color-${key}" data-piece="${key}" aria-label="Cor de ${label.toLowerCase()}">
        ${palette.map((color) => `<option value="${color.name}" ${selectedColors[key].name === color.name ? "selected" : ""}>${color.name}</option>`).join("")}
      </select>
      <button class="color-step" type="button" data-color-step="1" data-color-key="${key}" aria-label="Próxima cor para ${label}">›</button>
    </div>
  `).join("");
  colorControls.querySelectorAll("[data-piece]").forEach((select) => {
    select.addEventListener("change", () => {
      const key = select.dataset.piece;
      lastChangedColorKey = key;
      selectedColors[key] = palette.find(({ name }) => name === select.value) || initialColor;
      renderDummy();
      renderSummary();
    });
  });
  colorControls.querySelectorAll("[data-color-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.colorKey;
      const current = palette.findIndex(({ name }) => name === selectedColors[key].name);
      const next = (current + Number(button.dataset.colorStep) + palette.length) % palette.length;
      lastChangedColorKey = key;
      selectedColors[key] = palette[next];
      renderDummy();
      renderColorControls();
      renderSummary();
    });
  });
};

const renderPartArrows = () => {
  partArrows.innerHTML = pieces.map(({ key, label, side, top }) => {
    const choices = accessoryChoices[key];
    const choice = choices[selectedAccessories[key]];
  const arrow = `<button type="button" data-cycle aria-label="Próximo acessório para ${label}">›</button>`;
  const copy = `<span class="part-control-copy"><strong>${label}</strong><small>${choice}</small></span>`;
  return `<div class="part-control part-control--${side} part-control--${key}" style="top:${top}" data-part="${key}">
      ${side === "left" ? arrow + copy : copy + arrow}
    </div>`;
  }).join("");

  partArrows.querySelectorAll("[data-part]").forEach((control) => {
    control.querySelector("button[data-cycle]").addEventListener("click", () => {
      const key = control.dataset.part;
      const choices = accessoryChoices[key];
      selectedAccessories[key] = (selectedAccessories[key] + 1) % choices.length;
      activePartLabel.textContent = pieces.find((piece) => piece.key === key).label;
      activeAccessory.textContent = choices[selectedAccessories[key]];
      renderPartArrows();
      renderSummary();
    });
  });
};

const renderSummary = () => {
  const colorText = pieces.map(({ label, key }) => `${label}: ${selectedColors[key].name}`).join(" · ");
  const accessories = pieces
    .map(({ key, label }) => ({ label, choice: accessoryChoices[key][selectedAccessories[key]] }))
    .filter(({ choice }) => choice !== "Sem acessório")
    .map(({ label, choice }) => `${label}: ${choice}`);
  selectionSummary.textContent = `${colorText}. ${accessories.length ? `Acessórios: ${accessories.join(" · ")}.` : "Nenhum acessório selecionado."}`;
};

baseImage.addEventListener("error", () => {
  document.querySelector(".stage-caption").textContent = "Não foi possível carregar a foto base do Dummy. Confira os arquivos da pasta Monte seu dummy.";
});
renderColorControls();
renderPartArrows();
renderSummary();

document.querySelector("[data-reset]")?.addEventListener("click", () => {
  pieces.forEach(({ key }) => {
    selectedColors[key] = initialColor;
    selectedAccessories[key] = 0;
  });
  lastChangedColorKey = "head";
  activePartLabel.textContent = "Selecione uma parte do Dummy";
  activeAccessory.textContent = "As opções aparecem aqui";
  renderDummy();
  renderColorControls();
  renderPartArrows();
  renderSummary();
});
