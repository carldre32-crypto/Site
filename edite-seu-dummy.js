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
  { key: "head", label: "Cabeça", side: "right", top: "7%", mask: [[[192, 40], [238, 40], [240, 99], [236, 107], [195, 107], [191, 99]]] },
  { key: "torso", label: "Tronco", side: "left", top: "27%", mask: [[[184, 116], [248, 116], [250, 174], [244, 187], [226, 194], [214, 191], [202, 194], [183, 187], [181, 174]]] },
  { key: "arms", label: "Braços", side: "right", top: "37%", mask: [
    [[148, 124], [171, 125], [181, 136], [176, 165], [165, 186], [149, 181], [140, 171]],
    [[126, 184], [145, 190], [160, 199], [153, 240], [147, 249], [124, 245], [119, 236]],
    [[284, 124], [261, 125], [251, 136], [256, 165], [267, 186], [283, 181], [292, 171]],
    [[306, 184], [287, 190], [272, 199], [279, 240], [285, 249], [308, 245], [313, 236]],
    [[119, 238], [153, 242], [150, 267], [126, 267], [118, 255]],
    [[313, 238], [279, 242], [282, 267], [306, 267], [314, 255]]
  ] },
  { key: "hands", label: "Mãos", side: "left", top: "43%", mask: [
    [[112, 269], [131, 266], [145, 274], [141, 300], [132, 316], [119, 313], [112, 301]],
    [[320, 269], [301, 266], [287, 274], [291, 300], [300, 316], [313, 313], [320, 301]]
  ] },
  { key: "waist", label: "Cintura", side: "right", top: "48%", mask: [
    [[188, 190], [244, 190], [244, 239], [237, 252], [196, 252], [188, 239]],
    [[171, 232], [192, 229], [207, 248], [201, 278], [181, 282], [168, 266]],
    [[196, 249], [236, 249], [239, 283], [219, 291], [198, 283]],
    [[240, 229], [261, 232], [264, 266], [251, 282], [231, 278], [225, 248]]
  ] },
  { key: "legs", label: "Pernas", side: "left", top: "66%", mask: [
    [[168, 277], [197, 280], [198, 291], [192, 367], [161, 373], [156, 361]],
    [[164, 370], [187, 372], [192, 386], [187, 401], [178, 406], [166, 402], [161, 389]],
    [[161, 397], [178, 401], [189, 400], [185, 459], [181, 477], [157, 477], [152, 462]],
    [[242, 372], [265, 370], [268, 389], [263, 402], [251, 406], [242, 401], [237, 386]],
    [[235, 280], [264, 277], [276, 361], [271, 373], [240, 367], [234, 291]],
    [[254, 401], [271, 397], [280, 462], [275, 477], [251, 477], [247, 459]]
  ] },
  { key: "feet", label: "Pés", side: "right", top: "84%", mask: [
    [[155, 475], [178, 478], [181, 499], [175, 510], [154, 507], [150, 497]],
    [[141, 499], [184, 500], [190, 516], [180, 528], [151, 531], [140, 521]],
    [[254, 478], [277, 475], [282, 497], [278, 507], [257, 510], [251, 499]],
    [[248, 500], [291, 499], [292, 521], [281, 531], [252, 528], [242, 516]]
  ] }
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
  colorImages[color.name].addEventListener("load", () => renderDummy());
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
    if (piece.mask.some((polygon) => pointInPolygon(x, y, polygon))) return piece.key;
  }
  return null;
};

const MAX_LEAK_DISTANCE = 40; // px: amarelo fora das máscaras é atribuído à peça mais próxima
const segments = pieces.flatMap(({ key, mask }) =>
  mask.flatMap((polygon) => polygon.map((point, i) => [key, point, polygon[(i + 1) % polygon.length]])));

const distanceToSegment = (x, y, [ax, ay], [bx, by]) => {
  const dx = bx - ax, dy = by - ay;
  const lengthSq = dx * dx + dy * dy;
  const t = lengthSq ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / lengthSq)) : 0;
  return Math.hypot(x - (ax + t * dx), y - (ay + t * dy));
};

const nearestRegion = (x, y) => {
  let best = null, bestDistance = MAX_LEAK_DISTANCE;
  for (const [key, a, b] of segments) {
    const d = distanceToSegment(x, y, a, b);
    if (d < bestDistance) { bestDistance = d; best = key; }
  }
  return best;
};

// Plástico amarelo = matiz amarelo, saturado, inclusive as áreas sombreadas.
// Juntas/contornos (cinza e preto) têm saturação baixa e ficam intactos.
const isYellowPlastic = (r, g, b) => {
  const { h, s, l } = rgbToHsl(r, g, b);
  return h >= .075 && h <= .2 && s > .3 && l > .06;
};

let regionMap = null; // região de cada pixel, calculada uma única vez a partir da foto base amarela

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

const CLIP_GROW = 12; // px de folga em volta de cada máscara no plano B
const renderClipped = () => {
  fallbackImage.style.display = "none";
  canvas.style.display = "";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  const layer = document.createElement("canvas");
  layer.width = canvas.width; layer.height = canvas.height;
  const layerContext = layer.getContext("2d");
  // do menos para o mais prioritário (mesma ordem de regionForPixel, invertida)
  ["legs", "feet", "torso", "waist", "arms", "hands", "head"].forEach((key) => {
    const photo = colorImages[selectedColors[key].name];
    if (!photo.complete || !photo.naturalWidth) return;
    const piece = pieces.find((item) => item.key === key);
    layerContext.globalCompositeOperation = "source-over";
    layerContext.clearRect(0, 0, layer.width, layer.height);
    layerContext.fillStyle = layerContext.strokeStyle = "#000";
    layerContext.lineJoin = "round";
    layerContext.lineWidth = CLIP_GROW * 2;
    piece.mask.forEach((polygon) => {
      layerContext.beginPath();
      polygon.forEach(([x, y], i) => (i ? layerContext.lineTo(x, y) : layerContext.moveTo(x, y)));
      layerContext.closePath();
      layerContext.fill();
      layerContext.stroke();
    });
    layerContext.globalCompositeOperation = "source-in";
    layerContext.drawImage(photo, 0, 0, layer.width, layer.height);
    context.drawImage(layer, 0, 0);
  });
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
    // Em file:// (ou imagens de outra origem) o navegador bloqueia a leitura de pixels.
    // Plano B: sem ler pixels, recorta a foto de cada cor dentro da região da peça.
    if (error.name !== "SecurityError") throw error;
    renderClipped();
    return;
  }
  fallbackImage.style.display = "none";
  canvas.style.display = "";
  const data = pixels.data;
  if (!regionMap) {
    regionMap = new Array(canvas.width * canvas.height).fill(null);
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        if (data[index + 3] < 12 || !isYellowPlastic(data[index], data[index + 1], data[index + 2])) continue;
        regionMap[y * canvas.width + x] = regionForPixel(x, y) || nearestRegion(x, y);
      }
    }
  }
  const targetHsl = Object.fromEntries(pieces.map(({ key }) => [key, rgbToHsl(...Object.values(hexToRgb(selectedColors[key].value)))]));
  for (let i = 0; i < regionMap.length; i++) {
    const region = regionMap[i];
    if (!region) continue;
    const index = i * 4;
    const source = rgbToHsl(data[index], data[index + 1], data[index + 2]);
    const target = targetHsl[region];
    const lightness = Math.max(.035, Math.min(.96, target.l * (.74 + (source.l - .58) * .85)));
    const [nextR, nextG, nextB] = hslToRgb(target.h, target.s, lightness);
    data[index] = nextR; data[index + 1] = nextG; data[index + 2] = nextB;
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
