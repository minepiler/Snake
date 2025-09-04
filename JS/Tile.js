"use strict"

export class Tile{
    constructor(){
        this.tileDiv = document.createElement("div");
        this.tileDiv.className = "tile";
    }

    addTile(board){
        board.appendChild(this.tileDiv);
    }
}

