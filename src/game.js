const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

function Game(){
    const DIM_X = 500;
    const DIM_Y = 500;
    const NUM_ASTEROIDS = 5;
    this.asteroids = [];

} 
Game.prototype.randomPosition = function() {
    let x = DIM_X * Math.random();
    let y = DIM_Y * Math.random();
    return [x,y];
}

Game.prototype.addAsteroids = function(){

    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        let pos = randomPosition;
        this.asteroids.push(new Asteroid({ pos: pos}) )
    }

}

module.exports = Game;