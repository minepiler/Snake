"use strict"

import { Board } from "./Board.js";
import { Tile  } from "./Tile.js";
import { Snake } from "./Snake.js";

window.onload = () => {
    initializeBoard();
    initializeTiles();
    initializeSnake();
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
        tiles[46 + i].style.backgroundColor = "red";
    }

    for (let i = 0; i < tiles.length; i++ ){
        console.log(tiles[i]);
    }

}



// snake is array
// up down difference of 15