"use strict";

import { Board } from "./Board.js";
import { Tile  } from "./Tile.js";
import { Snake } from "./Snake.js";

var tiles = Array;
var snake = Object;

window.onload = () => {
    initializeBoard();
    initializeTiles();
    initializeSnake();

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowRight" : 
                setInterval(function(){moveSnake("ArrowRight")}, 750)
        }
        console.log(e.key);
    });
}

function initializeBoard(){
    var board = new Board();    
    board.addBoard();
}

function initializeTiles(){
    const location = document.getElementById("board");

    for (let i = 0; i < 225; i++){
        var tile = new Tile();
        tile.tileDiv.id = i;   
        tile.addTile(location);
    }

    tiles = document.querySelectorAll(".tile")
}

function initializeSnake(){
    snake = new Snake();

    for (let i = 0; i < snake.Length; i++){
        tiles[snake.tailPosition + i].style.backgroundColor = "red";
    }

    tiles[snake.headPosition].style.backgroundColor = "purple";
}

function moveSnake(arrowKey){
    tiles[snake.tailPosition].style.backgroundColor = "";
    
    snake.tailPosition += 1;
    console.log(snake.headPosition += 1)

    for (let i = 0; i < snake.Length; i++){
        tiles[snake.tailPosition + i].style.backgroundColor = "green";
    }

    tiles[snake.headPosition].style.backgroundColor = "purple";
}



// snake is array
// up down difference of 15