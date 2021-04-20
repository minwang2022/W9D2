const Game = require("./game");

function GameView(ctx) {
    this.ctx = ctx;
    this.game = new Game();
    this.game.addAsteroids();
}

GameView.prototype.start = function() {
    setInterval( () => {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }, 20)
}

module.exports = GameView;