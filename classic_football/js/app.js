//Grid layout and player movements from Stack Overflow: https://stackoverflow.com/questions/58162481/move-element-in-a-grid-layout-with-arrow-keys


const container = document.querySelector(".field");
const gridBoxes = document.querySelectorAll(".fieldGrid");
const gridArray = Array.from(gridBoxes);
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


// window.addEventListener("keydown", arrowKey);


//adding an id to each yard line on the field.
// $(function () {
//     $(".fieldGrid").attr("id", "yardLine");
// })

//arrow key functions\\
//right button function
function moveRight(){
const buttonRight = document.getElementById('goRight');
buttonRight.addEventListener("click",  function () {
    $("#player").detach("#start");
    $("#player").appendTo("#negTen");
  });
}

$.when(moveRight()).then(function () {
    $("#player").appendTo("#negTwenty");
})

    // $.when($("#player").appendTo("#negTwenty")).then(function() {
    //     $("#player").appendTo("#negThirty");
    // })

// $("#player").appendTo("#negTwenty");

//up button function
function moveUp(){
    const buttonRight = document.getElementById('goUp');
    buttonRight.addEventListener("click",  function () {
        $("#player").detach(".fieldGrid");
        $("#player").appendTo(".fieldGrid");
      });
    }

//down button function
function moveDown(){
    const buttonRight = document.getElementById('goDown');
    buttonRight.addEventListener("click",  function () {
        $("#player").detach(".fieldGrid");
        $("#player").appendTo(".fieldGrid");
        });
    }


//scoreboard layout from https://stackoverflow.com/questions/53946426/scoreboard-design-using-html-and-css and functionality from https://stackoverflow.com/questions/28822849/scoreboard-object-in-javascript

const scoreboard = function (score) {
    this.score = score;
    scoreboard.touchdown = function () {
        console.log(this.score + 6)
    }
}


//for the .when() functionality for the button: https://gist.github.com/cowboy/3399155