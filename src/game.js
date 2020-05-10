
export default class Game {
    constructor(){
        this.width = 50;
        this.height = 50;

        this.player = {
            x: 0,
            y: 0
        };
    }

    moveUp() {
        if (this.player.y > 0) {
            this.player.y--;
        }
    }

    moveDown() {
        if (this.player.y < this.height-1) {
            this.player.y++;
        }
    }

    moveRight() {
        if (this.player.x < this.width-1) {
            this.player.x++;
        }
    }
    
    moveLeft() {
        if(this.player.x > 0) {
            this.player.x--;
        }
    }
}