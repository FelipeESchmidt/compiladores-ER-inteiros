const resetButton = document.getElementById("reset");
const states = [
  [
    { char: "-", to: 1 },
    { char: "+", to: 1 },
  ],
  [
    { char: "0", to: 2 },
    { char: "1", to: 2 },
    { char: "2", to: 2 },
    { char: "3", to: 2 },
    { char: "4", to: 2 },
    { char: "5", to: 2 },
    { char: "6", to: 2 },
    { char: "7", to: 2 },
    { char: "8", to: 2 },
    { char: "9", to: 2 },
  ],
  [
    { char: "0", to: 2 },
    { char: "1", to: 2 },
    { char: "2", to: 2 },
    { char: "3", to: 2 },
    { char: "4", to: 2 },
    { char: "5", to: 2 },
    { char: "6", to: 2 },
    { char: "7", to: 2 },
    { char: "8", to: 2 },
    { char: "9", to: 2 },
    { char: "ε", end: true },
  ],
];

let number = "";
let selected = 0;
let ableToCreate = true;

const start = () => {
  number = "";
  selected = 0;
  ableToCreate = true;
  render();
};

const end = () => {
  ableToCreate = false;
  render();
};

const renderNumber = () =>
  (document.getElementById("number").innerHTML = number);

const addToNumber = (sIndex, iIndex) => {
  if (sIndex !== selected || !ableToCreate) return;
  const clicked = states[sIndex][iIndex];

  if (clicked.end) return end();

  number += clicked.char;
  selected = clicked.to;
  render();
};

const renderItems = () => {
  const table = document.getElementById("table");
  const currentState = states[selected];
  if (!ableToCreate) return (table.innerHTML = "FIM!");
  table.innerHTML = `<tr>${currentState
    .map(
      (item, ii) =>
        `<td onClick={addToNumber(${`${selected},${ii}`})}>${item.char}</td>`
    )
    .join("")}</tr>`;
};

const render = () => {
  renderItems();
  renderNumber();
};

renderItems();
renderNumber();
resetButton.addEventListener("click", start);
