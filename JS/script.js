"use strict";
// add singleton for snake and board

import { Board } from "./Board.js";
import { Tile  } from "./Tile.js";
import { Snake } from "./Snake.js";

var turningPoint = Number;
var tiles = Array;
var snake = Object;
var interval = Function;
var lastPressedKey = String;

var test = 1;

window.onload = () => {
    initializeBoard();
    initializeTiles();
    initializeSnake();

    window.addEventListener("keydown", (e) => {

        if (lastPressedKey == e.key) {return;} 
        else {clearInterval(interval);}
        
        switch (e.key) {
            case "ArrowRight" : 
                 turningPoint = snake.headPosition;
                interval = setInterval(function(){moveSnake("ArrowRight")}, 750);
            break;

            case "ArrowDown" : 
                turningPoint = snake.headPosition;
                interval = setInterval(function(){moveSnake("ArrowDown")}, 750);
            break;
        }

        lastPressedKey = e.key;
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
        tiles[snake.tailPosition + i].style.backgroundColor = "green";
    }

    tiles[snake.headPosition].style.backgroundColor = "purple";
}

function moveSnake(arrowKey){

    switch(arrowKey){
        case "ArrowRight" : 
            tiles[snake.tailPosition].style.backgroundColor = "";

            if (snake.tailPosition == turningPoint){
                test = 1;
            }
        
            snake.setHeadPosition(1);
            snake.setTailPosition(test);

            for (let i = 0; i < snake.Length; i++){
                tiles[snake.headPosition - i].style.backgroundColor = "green";
            }

            tiles[snake.headPosition].style.backgroundColor = "purple";

        break;

        case "ArrowDown" : 
            tiles[snake.tailPosition].style.backgroundColor = "";
            snake.setHeadPosition(15);
            
            if (snake.tailPosition == turningPoint){
                test = 15;
            }

            snake.setTailPosition(test);

            console.log(snake.tailPosition)


            for (let i = 0; i < snake.Length; i++){
                tiles[snake.headPosition - (i * 15)].style.backgroundColor = "green";
            }


            tiles[snake.headPosition].style.backgroundColor = "purple";

        break;

    }
   
}



// snake is array
// up down difference of 15

//change the direction of body using the turning point 
//Linked List

// optimize code