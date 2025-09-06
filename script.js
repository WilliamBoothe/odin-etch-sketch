const gridMin = 1;
const gridMax = 100;
let gridSize = 50;
buildGrid(gridSize);

// Button to change grid size
const adjustGrid = document.querySelector("button#adjustGrid");
adjustGrid.addEventListener("click", () => {
  const userInput = promptUserForGridSize();
  if (userInput === null) return;
  buildGrid(userInput);
});

function buildGrid(size) {
  const mainGrid = document.querySelector("div#mainGrid");
  mainGrid.replaceChildren();

  for (let r = 0; r < size; r++) {
    const cellRow = document.createElement("div");
    cellRow.className = "cellRow";
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", () => {
        if (cell.className === "cell active") {
          if (cell.style.opacity < 1) {
            cell.style.opacity = parseFloat(cell.style.opacity) + 0.1;
          }
          return;
        }
        cell.className = "cell active";
        cell.style.background =
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")";
        cell.style.opacity = 0.1;
      });
      cellRow.appendChild(cell);
    }
    mainGrid.appendChild(cellRow);
  }
}

function promptUserForGridSize() {
  let userInput = prompt(
    "Choose the cell count for each axis (whole number between 1 and 100):",
    gridSize
  );
  if (userInput === null) return null; // User cancelled input
  userInput = Number(userInput);
  const inputValid = validateGridSizeInput(userInput);

  if (inputValid) return userInput;
  alert("Somebody doesn't follow directions!");
  return null;
}

function validateGridSizeInput(userInput) {
  let isValid = true;

  if (userInput === null) isValid = false;
  if (!Number.isInteger(userInput)) isValid = false;
  if (userInput < gridMin) isValid = false;
  if (userInput > gridMax) isValid = false;

  return isValid;
}
