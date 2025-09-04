"use strict";

import { Board } from "./Board.js";
import { Tile  } from "./Tile.js";
import { Snake } from "./Snake.js";

window.onload = () => {
    initializeBoard();
    initializeTiles();
    initializeSnake();

    window.addEventListener("keydown", (e) => {
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
}

function initializeSnake(){
    const tiles = document.querySelectorAll(".tile")
    var snake = new Snake();

    for (let i = 0; i < snake.Length; i++){
        tiles[snake.tailPosition + i].style.backgroundColor = "red";
        tiles[snake.tailPosition + i].addEventListener("keypress", moveSnake);
    }

    tiles[snake.headPosition].style.backgroundColor = "purple";
}

function moveSnake(){
    console.log("")
}



// snake is array
// up down difference of 15