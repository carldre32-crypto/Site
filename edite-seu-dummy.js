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
  { key: "legs", label: "Pernas", side: "left", top: "66%" },
  { key: "feet", label: "Pés", side: "right", top: "84%" }
];

const accessoryChoices = {
  head: ["Sem acessório", "Dummy 13 Alternate Heads", "Dummy 13 More Heads", "Máscara de gás"],
  torso: ["Sem acessório", "Heavy Armor Kit", "Armor Plate Carrier", "Colete IOTV", "Chest Armour Pieces"],
  arms: ["Sem acessório", "Sword Arm", "Power Claw", "Back Fists Pack", "Extra Hand Poses"],
  hands: ["Sem acessório", "Back Fists Pack", "Extra Hand Poses", "Power Claw"],
  waist: ["Sem acessório", "Drop Leg Pistol Holster", "Drop Holsters"],
  legs: ["Sem acessório", "Spider Walker Mech Legs", "Leg Armor Roller", "Dummy 13 Boots"],
  feet: ["Sem acessório", "Dummy 13 Boots", "Spider Walker Mech Legs"]
};

const canvas = document.querySelector("[data-dummy-canvas]");
const context = canvas.getContext("2d");
const colorControls = document.querySelector("[data-color-controls]");
const partArrows = document.querySelector("[data-part-arrows]");
const activePartLabel = document.querySelector("[data-active-part]");
const activeAccessory = document.querySelector("[data-active-accessory]");
const selectionSummary = document.querySelector("[data-selection-summary]");
const fallbackImage = document.querySelector(".dummy-fallback");
const images = Object.fromEntries(palette.map(({ name }) => [name, new Image()]));
let selectedColor = palette[0];
const selectedAccessories = Object.fromEntries(pieces.map(({ key }) => [key, 0]));

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
  partArrows.innerHTML = pieces.map(({ key, label, side, top }) => {
    const choice = accessoryChoices[key][selectedAccessories[key]];
    const arrow = `<button type="button" data-cycle aria-label="Próximo acessório para ${label}">›</button>`;
    const copy = `<span class="part-control-copy"><strong>${label}</strong><small>${choice}</small></span>`;
    return `<div class="part-control part-control--${side} part-control--${key}" style="top:${top}" data-part="${key}">${side === "left" ? arrow + copy : copy + arrow}</div>`;
  }).join("");

  partArrows.querySelectorAll("[data-part]").forEach((control) => {
    control.querySelector("[data-cycle]").addEventListener("click", () => {
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
  const accessories = pieces
    .map(({ key, label }) => ({ label, choice: accessoryChoices[key][selectedAccessories[key]] }))
    .filter(({ choice }) => choice !== "Sem acessório")
    .map(({ label, choice }) => `${label}: ${choice}`);
  selectionSummary.textContent = `Dummy inteiro: ${selectedColor.name}. ${accessories.length ? `Acessórios: ${accessories.join(" · ")}.` : "Nenhum acessório selecionado."}`;
};

palette.forEach(({ name, image }) => {
  images[name].addEventListener("load", () => renderDummy());
  images[name].src = image;
});

renderColorControls();
renderPartArrows();
renderSummary();

document.querySelector("[data-reset]")?.addEventListener("click", () => {
  selectedColor = palette[0];
  pieces.forEach(({ key }) => { selectedAccessories[key] = 0; });
  activePartLabel.textContent = "Selecione uma parte do Dummy";
  activeAccessory.textContent = "As opções aparecem aqui";
  renderColorControls();
  renderPartArrows();
  renderDummy();
  renderSummary();
});
