import Game from "./src/game.js"
import View from "./src/view.js";

let game = new Game();

var bitch = document.getElementById("bitch");

let view = new View(document, game);

window.view = view;
window.game = game;

setInterval(() => {
    if(bitch.style.color === "black"){
        bitch.style.color = "white";
    } else {
        bitch.style.color = "black";
    }
}, 500)

view.render()

document.addEventListener('keydown', event =>{
    switch (event.keyCode) {
        case 37: //left
            game.moveLeft();
            view.render()
            break;
        case 38: //up
            game.moveUp();
            view.render()
            break;
        case 39: //right
            game.moveRight();
            view.render()
            break;
        case 40: //down
            game.moveDown();
            view.render()
            break;
    }
})
 
