"use strict"

window.onload = () => {
    var board = new Board();    
    board.addBoard();

    var location = document.getElementById("board");

    for (var i = 0; i < 225; i++){
        var tile = new Tile();    
        tile.addTile(location);
    }
}
