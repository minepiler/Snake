"use strict"

var Board = class {
    constructor(){
        this.boardDiv = document.createElement("div");
        this.boardDiv.id = "board";
    }

    addBoard(){
        document.body.appendChild(this.boardDiv);
    }
}
