const container = document.querySelector(".grid");
const gridNodes = document.querySelectorAll(".grid-item");
const gridArray = Array.from(gridNodes);
let circle = document.createElement("div");
let position = {x: 0, y: 0};


function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  
  let x = 0;
  let y = 0;
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    
    y = c%cols;
    
    if (y === (rows - 1)) {
    	x++;
    }    
        
    container.appendChild(cell).className = "grid-item grid-item-" + x + '' + y;
  }
}
const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
makeGrid(16, 16);
circle.style.width = "20px";
circle.style.height = "20px";
circle.style.backgroundColor = "#000";
let firstGridItem = document.querySelector(".grid-item");
firstGridItem.appendChild(circle);

function handleKey(e) {
  switch (e.keyCode) {
    case keys.left:
      position.y--;
      break;
    case keys.up:
      position.x--;
      break;

    case keys.right:
      position.y++;
      break;

    case keys.down:
      position.x++;
      break;
  }
  
  let gridItem = document.querySelector(".grid-item-" + position.x + '' + position.y);
  gridItem.appendChild(circle);
}
window.addEventListener("keydown", handleKey);