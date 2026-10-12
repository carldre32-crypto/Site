const photoRoot = "Fotos/Monte seu dummy/Dummys em pé sepaarados por cores";
const palette = ["Amarelo", "Azul", "Preto", "Rosa", "Verde", "Vermelho"].map((name) => ({
  name,
  image: `${photoRoot}/Dummy ${name}.png`
}));

const pieces = [
  { key: "head", label: "Cabeça", side: "right", top: "7%" },
  { key: "torso", label: "Tronco", side: "left", top: "27%" },
  { key: "arms", label: "Braços", side: "right", top: "37%" },
  { key: "hands", label: "Mãos", side: "left", top: "43%" },
  { key: "waist", label: "Cintura", side: "right", top: "48%" },
  { key: "body", label: "Corpo inteiro", side: "left", top: "56%" },
  { key: "legs", label: "Pernas", side: "left", top: "66%" },
  { key: "feet", label: "Pés", side: "right", top: "84%" }
];

const dummyPrice = 15;
const accessoryChoices = {
  head: [{ name: "Dummy 13 Alternate Heads", price: .6 }, { name: "Dummy 13 More Heads", price: 4 }, { name: "Máscara de gás", price: 1.5 }],
  torso: [{ name: "Heavy Armor Kit", price: 10 }, { name: "Armor Plate Carrier", price: .5 }, { name: "Colete IOTV", price: 3 }, { name: "Chest Armour Pieces", price: 2 }],
  arms: [{ name: "Sword Arm", price: .5 }, { name: "Power Claw", price: 2 }, { name: "Back Fists Pack", price: 3 }, { name: "Extra Hand Poses", price: 1 }],
  hands: [{ name: "Back Fists Pack", price: 3 }, { name: "Extra Hand Poses", price: 1 }, { name: "Power Claw", price: 2 }],
  waist: [{ name: "Drop Leg Pistol Holster", price: 1 }, { name: "Drop Holsters", price: .7 }],
  legs: [{ name: "Spider Walker Mech Legs", price: 4 }, { name: "Leg Armor Roller", price: 4 }],
  feet: [{ name: "Dummy 13 Boots", price: .1 }],
  body: [{ name: "Aquático", price: 5, image: "Fotos/Acessórios Dummy/Frontal/Corpo inteiro/Aquatico 5 reais.png" }]
};

accessoryChoices.torso.push(
  { name: "4 garras aranha", price: 4, image: "Fotos/Acessórios Dummy/Frontal/Tronco/4 garras aranha 4 reais.png", layer: "front", width: "100%", top: "0%" },
  { name: "Asa anjo", price: 2, image: "Fotos/Acessórios Dummy/Frontal/Tronco/Asa anjo 2 reais.png", layer: "back", width: "134%", top: "-14%" },
  { name: "Asa de dragão", price: 2, image: "Fotos/Acessórios Dummy/Frontal/Tronco/asa de dragao 2 reais.png", layer: "back", width: "134%", top: "-14%" },
  { name: "Asas metálicas", price: 2, image: "Fotos/Acessórios Dummy/Frontal/Tronco/Asas metalicas 2 reais.png", layer: "back", width: "134%", top: "-14%" },
  { name: "Asas metálicas móveis", price: 2, image: "Fotos/Acessórios Dummy/Frontal/Tronco/asas metalicas mexiveis 2 reaiss.png", layer: "back", width: "134%", top: "-14%" },
  { name: "Braços extras", price: 2, image: "Fotos/Acessórios Dummy/Frontal/Tronco/Bracos extras 2 reais.png", layer: "front", width: "100%", top: "0%" },
  { name: "Braços aranha extras", price: 4, image: "Fotos/Acessórios Dummy/Frontal/Tronco/Bracos extras 4 rreais.png", layer: "front", width: "100%", top: "0%" }
);

const canvas = document.querySelector("[data-dummy-canvas]");
const context = canvas.getContext("2d");
const colorControls = document.querySelector("[data-color-controls]");
const partArrows = document.querySelector("[data-part-arrows]");
const accessoryOptions = document.querySelector("[data-accessory-options]");
const activePartLabel = document.querySelector("[data-active-part]");
const activeAccessory = document.querySelector("[data-active-accessory]");
const selectionSummary = document.querySelector("[data-selection-summary]");
const fallbackImage = document.querySelector(".dummy-fallback");
const backAccessoryLayer = document.querySelector("[data-accessory-layer-back]");
const frontAccessoryLayer = document.querySelector("[data-accessory-layer-front]");
const images = Object.fromEntries(palette.map(({ name }) => [name, new Image()]));
let selectedColor = palette[0];
const selectedAccessories = Object.fromEntries(pieces.map(({ key }) => [key, new Set()]));
const accessoryCursors = Object.fromEntries(pieces.map(({ key }) => [key, -1]));

const renderAccessoryLayers = () => {
  const selected = pieces.flatMap(({ key }) => accessoryChoices[key]
    .filter(({ name, image }) => image && selectedAccessories[key].has(name)));
  const renderLayer = (layer, container) => {
    container.innerHTML = selected.filter((item) => (item.layer || "front") === layer)
      .map(({ name, image, width = "100%", top = "0%" }) => `<img class="dummy-accessory-image" src="${image}" alt="${name}" style="--accessory-width:${width};--accessory-top:${top}" loading="eager">`).join("");
  };
  renderLayer("back", backAccessoryLayer);
  renderLayer("front", frontAccessoryLayer);
  const fullFigureSelected = selectedAccessories.body.has("Aquático");
  canvas.style.visibility = fullFigureSelected ? "hidden" : "";
  fallbackImage.style.visibility = fullFigureSelected ? "hidden" : "";
  frontAccessoryLayer.classList.toggle("has-full-figure", fullFigureSelected);
};

const renderDummy = () => {
  const image = images[selectedColor.name];
  if (!image.complete || !image.naturalWidth) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  fallbackImage.style.display = "none";
  canvas.style.display = "";
};

const renderColorControls = () => {
  colorControls.innerHTML = `
    <div class="color-row color-row--global">
      <label for="color-dummy">Dummy inteiro</label>
      <button class="color-step" type="button" data-color-step="-1" aria-label="Cor anterior do Dummy">‹</button>
      <select class="color-select" id="color-dummy" data-dummy-color aria-label="Cor do Dummy inteiro">
        ${palette.map(({ name }) => `<option value="${name}" ${selectedColor.name === name ? "selected" : ""}>${name}</option>`).join("")}
      </select>
      <button class="color-step" type="button" data-color-step="1" aria-label="Próxima cor do Dummy">›</button>
    </div>`;

  colorControls.querySelector("[data-dummy-color]").addEventListener("change", (event) => {
    selectedColor = palette.find(({ name }) => name === event.currentTarget.value) || palette[0];
    renderDummy();
    renderSummary();
  });
  colorControls.querySelectorAll("[data-color-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = palette.findIndex(({ name }) => name === selectedColor.name);
      const next = (current + Number(button.dataset.colorStep) + palette.length) % palette.length;
      selectedColor = palette[next];
      renderColorControls();
      renderDummy();
      renderSummary();
    });
  });
};

const renderPartArrows = () => {
  partArrows.innerHTML = pieces.filter(({ key }) => key !== "body").map(({ key, label, side, top }) => {
    const count = selectedAccessories[key].size;
    const arrow = `<button type="button" data-cycle aria-label="Adicionar acessório para ${label}">›</button>`;
    const copy = `<span class="part-control-copy"><strong>${label}</strong><small>${count} selecionado(s)</small></span>`;
    return `<div class="part-control part-control--${side} part-control--${key}" style="top:${top}" data-part="${key}">${side === "left" ? arrow + copy : copy + arrow}</div>`;
  }).join("");

  partArrows.querySelectorAll("[data-part]").forEach((control) => {
    control.querySelector("[data-cycle]").addEventListener("click", () => {
      const key = control.dataset.part;
      const choices = accessoryChoices[key];
      accessoryCursors[key] = (accessoryCursors[key] + 1) % choices.length;
      const choice = choices[accessoryCursors[key]];
      selectedAccessories[key].add(choice.name);
      activePartLabel.textContent = pieces.find((piece) => piece.key === key).label;
      activeAccessory.textContent = `${choice.name} • ${formatMoney(choice.price)}`;
      renderPartArrows();
      renderAccessoryOptions(key);
      renderAccessoryLayers();
      renderSummary();
    });
  });
};

const formatMoney = (value) => `R$ ${value.toFixed(2).replace(".", ",")}`;

const renderAccessoryOptions = (openKey = null) => {
  accessoryOptions.innerHTML = pieces.map(({ key, label }, index) => `
    <details class="accessory-group" data-group="${key}" ${openKey === key || (!openKey && index === 0) ? "open" : ""}>
      <summary>${label}<span>${selectedAccessories[key].size} selecionado(s)</span></summary>
      <div class="accessory-options-list">
        ${accessoryChoices[key].map(({ name, price, image }) => `<label class="accessory-option"><input type="checkbox" data-accessory-key="${key}" value="${name}" ${selectedAccessories[key].has(name) ? "checked" : ""}>${image ? `<img src="${image}" alt="${name}" loading="lazy">` : `<span class="accessory-image-empty" aria-hidden="true">＋</span>`}<span class="accessory-option-name">${name}</span><strong>${formatMoney(price)}</strong></label>`).join("")}
      </div>
    </details>`).join("");

  accessoryOptions.querySelectorAll("[data-accessory-key]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const { accessoryKey, value } = checkbox.dataset;
      if (checkbox.checked) selectedAccessories[accessoryKey].add(value);
      else selectedAccessories[accessoryKey].delete(value);
      renderPartArrows();
      renderAccessoryOptions(accessoryKey);
      renderAccessoryLayers();
      renderSummary();
    });
  });
};

const renderSummary = () => {
  const accessories = pieces.flatMap(({ key, label }) => accessoryChoices[key]
    .filter(({ name }) => selectedAccessories[key].has(name))
    .map(({ name, price }) => ({ label, name, price })));
  const accessoriesTotal = accessories.reduce((sum, item) => sum + item.price, 0);
  const details = accessories.length
    ? accessories.map(({ label, name, price }) => `${label}: ${name} (${formatMoney(price)})`).join(" · ")
    : "Nenhum acessório selecionado.";
  selectionSummary.innerHTML = `<span class="price-breakdown"><span>Dummy inteiro (${selectedColor.name}): <strong>${formatMoney(dummyPrice)}</strong></span><span>Acessórios: <strong>${formatMoney(accessoriesTotal)}</strong></span><span class="price-total">Total: <strong>${formatMoney(dummyPrice + accessoriesTotal)}</strong></span></span><span class="price-items">${details}</span>`;
};

palette.forEach(({ name, image }) => {
  images[name].addEventListener("load", () => renderDummy());
  images[name].src = image;
});

renderColorControls();
renderPartArrows();
renderAccessoryOptions();
renderAccessoryLayers();
renderSummary();

document.querySelector("[data-reset]")?.addEventListener("click", () => {
  selectedColor = palette[0];
  pieces.forEach(({ key }) => { selectedAccessories[key].clear(); accessoryCursors[key] = -1; });
  activePartLabel.textContent = "Selecione uma parte do Dummy";
  activeAccessory.textContent = "As opções aparecem aqui";
  renderColorControls();
  renderPartArrows();
  renderAccessoryOptions();
  renderAccessoryLayers();
  renderDummy();
  renderSummary();
});
