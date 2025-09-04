"use strict";

export class Board {
    constructor(){
        this.boardDiv = document.createElement("div");
        this.boardDiv.id = "board";
    }

    addBoard(){
        document.body.appendChild(this.boardDiv);
    }
}
