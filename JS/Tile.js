"use strict"

var Tile = class {
    constructor(){
        this.tileDiv = document.createElement("div")
        this.tileDiv.className = "tile";
    }

    addTile(board){
        board.appendChild(this.tileDiv)
    }
}

