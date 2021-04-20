console.log("Webpack is working????")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

const Ship = require("./ship.js");
window.Ship = Ship;

const Game = require("./game.js");
window.Game = Game;

const GameView = require("./game_view.js");
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");

    //background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    // //MO object
    // const mo1 = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    // mo1.move();
    // mo1.move();
    // mo1.move();

    // mo1.draw(ctx);


    // const g = new Game();
    // g.addAsteroids();
    // g.draw(ctx);

    const gv = new GameView(ctx);
    gv.start();
})
