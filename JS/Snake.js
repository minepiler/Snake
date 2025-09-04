"use strict";

export class Snake {
    constructor(){
        this.Length = 2;
        this.color = "red"
        this.tailPosition = 46;
        this.headPosition = this.tailPosition + this.Length;
    }

    addLength(){
        this.Length += 1;
    }
}