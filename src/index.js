console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");

    //background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    // //MO object
    const mo1 = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo1.move();
    mo1.move();
    mo1.move();

    mo1.draw(ctx);

    const as1 = new Asteroid({
        pos: [80, 100]
    });

    as1.draw(ctx);

})
