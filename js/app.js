//console.log("git er done!")

//let myPlayer = document.getElementById(player);

//defined the click event for all 3 buttons in lines 54-56


//Grid layout and player movements from Stack Overflow: https://stackoverflow.com/questions/58162481/move-element-in-a-grid-layout-with-arrow-keys


const footballField = document.querySelector(".field");
const gridBoxes = document.querySelectorAll(".fieldGrid");
const gridArray = Array.from(gridBoxes);
let player = document.createElement("div");
let position = {x: 0, y: 0};

function makeGrid (rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    let x = 0;
    let y = 0;
    for (let c = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        y = i%columns;
        if (y === (rows - 1)) {
            x++;
        }
        container.appendChild(cell).className = "fieldGrid fieldGrid-" + x + y;
    }
}

const arrows = {
    up: 38,
    right: 39,
    down: 40,
}

makeGrid(3, 12);