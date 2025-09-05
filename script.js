const rows = 16;
const cols = 16;
const mainGrid = document.querySelector("#mainGrid");

for (let r = 0; r < rows; r++) {
  const cellRow = document.createElement("div");
  cellRow.className = "cellRow";
  for (let c = 0; c < cols; c++) {
    const cell = document.createElement("div");
    cell.className = "cell notHovered";
    cell.addEventListener("mouseover", () => {
      cell.className = "cell hovered";
    });
    cellRow.appendChild(cell);
  }
  mainGrid.appendChild(cellRow);
}
