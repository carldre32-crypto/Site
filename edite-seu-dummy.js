const palette = [
  { name: "Amarelo", value: "#ffd318" }, { name: "Branco", value: "#f4f4f2" },
  { name: "Preto", value: "#252832" }, { name: "Azul", value: "#2f7df6" },
  { name: "Rosa", value: "#ff8fc7" }, { name: "Verde", value: "#2fbe63" },
  { name: "Lavanda", value: "#a78bfa" }, { name: "Vermelho", value: "#ef3030" }
];

const pieces = [
  { key: "head", label: "Cabeça" }, { key: "torso", label: "Tronco" },
  { key: "arms", label: "Braços" }, { key: "hands", label: "Mãos" },
  { key: "legs", label: "Pernas" }, { key: "feet", label: "Pés" }
];

const accessories = [
  "Nenhum acessório", "Dummy 13 Heavy Armor Kit", "Dummy 13 Drop Leg Pistol Holster",
  "Dummy 13 extra arms backpack", "Dummy 13 Sword Arm", "Dummy 13 Power Claw",
  "Dummy 13 Spider Walker Mech Legs", "Dummy 13 Lightsaber", "Dummy 13 Armor Plate Carrier",
  "Military Heavy Bulletproof Vest IOTV", "Dummy 13 Chest Armour Pieces", "Dummy 13 Dragon Wings",
  "Dummy 13 Jetpack with Rocket", "Dummy 13 Narnian Shield", "Dummy 13 Weapons Pack Version 2.0"
];

const colorControls = document.querySelector("[data-color-controls]");
const accessoryName = document.querySelector("[data-accessory-name]");
const accessoryDescription = document.querySelector("[data-accessory-description]");
const accessoryPosition = document.querySelector("[data-accessory-position]");
const selectionSummary = document.querySelector("[data-selection-summary]");
const selectAccessoryButton = document.querySelector("[data-select-accessory]");
const colors = Object.fromEntries(pieces.map(({ key }) => [key, palette[0]]));
let accessoryIndex = 0;
let selectedAccessories = [];

const optionsMarkup = (selectedName) => palette.map((color) =>
  `<option value="${color.value}" ${color.name === selectedName ? "selected" : ""}>${color.name}</option>`
).join("");

colorControls.innerHTML = pieces.map(({ key, label }) => `
  <div class="color-row">
    <label for="color-${key}">${label}</label>
    <select class="color-select" id="color-${key}" data-piece="${key}" aria-label="Cor de ${label.toLowerCase()}">
      ${optionsMarkup(colors[key].name)}
    </select>
  </div>
`).join("");

const renderAccessory = () => {
  const current = accessories[accessoryIndex];
  const isNone = accessoryIndex === 0;
  accessoryName.textContent = current;
  accessoryDescription.textContent = isNone
    ? "Use as setas para explorar as opções. As fotos entram quando você enviar os arquivos."
    : "Foto do acessório e encaixe no Dummy serão adicionados quando você enviar as imagens.";
  accessoryPosition.textContent = `Opção ${accessoryIndex + 1} de ${accessories.length}`;
  selectAccessoryButton.disabled = isNone;
  selectAccessoryButton.textContent = selectedAccessories.includes(current) ? "Remover da montagem" : "Adicionar à montagem";
  selectAccessoryButton.classList.toggle("is-selected", selectedAccessories.includes(current));
  renderSummary();
};

const renderSummary = () => {
  const colorSummary = pieces.map(({ key, label }) => `${label}: ${colors[key].name}`).join(" · ");
  const accessorySummary = selectedAccessories.length ? ` Acessórios: ${selectedAccessories.join(", ")}.` : " Nenhum acessório selecionado.";
  selectionSummary.textContent = `${colorSummary}.${accessorySummary}`;
};

document.querySelectorAll("[data-piece]").forEach((select) => {
  select.addEventListener("change", () => {
    const piece = select.dataset.piece;
    const chosen = palette.find(({ value }) => value === select.value) || palette[0];
    colors[piece] = chosen;
    document.documentElement.style.setProperty(`--${piece}`, chosen.value);
    renderSummary();
  });
});

document.querySelector("[data-accessory-prev]").addEventListener("click", () => {
  accessoryIndex = (accessoryIndex - 1 + accessories.length) % accessories.length;
  renderAccessory();
});
document.querySelector("[data-accessory-next]").addEventListener("click", () => {
  accessoryIndex = (accessoryIndex + 1) % accessories.length;
  renderAccessory();
});
selectAccessoryButton.addEventListener("click", () => {
  const current = accessories[accessoryIndex];
  selectedAccessories = selectedAccessories.includes(current)
    ? selectedAccessories.filter((item) => item !== current)
    : [...selectedAccessories, current];
  renderAccessory();
});
document.querySelector("[data-reset]").addEventListener("click", () => {
  pieces.forEach(({ key }) => {
    colors[key] = palette[0];
    document.documentElement.style.setProperty(`--${key}`, palette[0].value);
    document.querySelector(`[data-piece="${key}"]`).value = palette[0].value;
  });
  selectedAccessories = [];
  accessoryIndex = 0;
  renderAccessory();
});

renderAccessory();
