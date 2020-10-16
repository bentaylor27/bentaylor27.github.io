//Grid layout and player movements from Stack Overflow: https://stackoverflow.com/questions/58162481/move-element-in-a-grid-layout-with-arrow-keys


const container = document.querySelector(".field");
const gridBoxes = document.querySelectorAll(".fieldGrid");
const gridArray = Array.from(gridBoxes);
const button = document.getElementById(".buttons")
let player = document.createElement("div");
let position = {x: 0, y: 0};

//function to make grid

function makeGrid (rows, columns) {
    container.style.setProperty("grid-rows", rows);
    container.style.setProperty("grid-columns", columns);
    let x = 0;
    let y = 0;
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        y = i%columns;
        if (y === (rows - 1)) {
            x++;
        }
        container.appendChild(cell).className = "fieldGrid fieldGrid" + x + y;
    }
}

//arrow keys to use in game

const arrows = {
    up: 38,
    right: 39,
    down: 40,
}

makeGrid(3, 12);
player.style.width = "30px";
player.style.height = "10px";
player.style.backgroundColor = "orange";
let firstFieldGrid = document.querySelector("fieldGrid");
firstFieldGrid.appendChild(player);

// function arrowKey(z) {
//     switch (z.keyCode) {
//         case keys.right:
//             position.y++;
//             break;
//         case keys.up:
//             position.x--;
//             break;
//         case keys.down:
//             position.x++;
//             break;
//     }
//     let fieldGrid = document.querySelector(".fieldGrid" + position.x + '' + position.y);
//     fieldGrid.appendChild(player);
// }

// window.addEventListener("keydown", arrowKey);

// $(".player").keydown(function() {
//     switch (arrowKey) {
//         case keys.right:
//             position.y++;
//             return;
//         case keys.up:
//             position.x--;
//             return;
//         case keys.down:
//             position.x++;
//             return;
//     }

//     let fieldGrid = document.querySelector(".fieldGrid" + position.x + "" + position.y);
// })

// window.addEventListener("keydown", arrowKey);

button.addEventListener("click", playerMove);
function playerMove () {
    switch (arrowKey) {
        case keys.moveRight:
            position.y++;
            return;
        case keys.moveUp:
            position.x--;
            return;
        case keys.moveDown:
            position.x++;
            return;
    }
    let fieldGrid = document.querySelector(".fieldGrid" + position.x + "" + position.y);
}


//scoreboard layout from https://stackoverflow.com/questions/53946426/scoreboard-design-using-html-and-css and functionality from https://stackoverflow.com/questions/28822849/scoreboard-object-in-javascript

const scoreboard = function (score) {
    this.score = score;
    scoreboard.touchdown = function () {
        console.log(this.score + 6)
    }
}