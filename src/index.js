require 
console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
module.exports = {
canvas: document.addEventListener("DOMContentLoaded", () => {
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
})
}