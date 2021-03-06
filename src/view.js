export default class View{
    constructor(document, game) {
        var canvas = document.getElementById("playground");
        var ctx = canvas.getContext("2d");
        this.ctx = ctx;
        this.game = game;
    }

    render(){
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, 500, 500);
        
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.font = "10px Arial";
        this.ctx.fillText("@", this.game.player.x * 10, this.game.player.y * 10 + 8);        
    }
}