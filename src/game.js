const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

function Game(){
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.ship = new Ship( {pos: this.randomPosition()}); 
} 

Game.prototype.randomPosition = function() {
    let x = this.DIM_X * Math.random();
    let y = this.DIM_Y * Math.random();
    return [x,y];
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        let posn = this.randomPosition();
        this.asteroids.push(new Asteroid({ pos: posn, game: this}) )
    }
}

Game.prototype.draw = function(ctx) {
    //call clearRect on the ctx to wipe down the entire space.
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    //Call the draw method on each of the asteroids.
    for (let i = 0; i < this.allObjects.length; i++) {
        this.allObjects[i].draw(ctx)
    }
}

Game.prototype.moveObjects = function () {
    for (let i = 0; i < this.allObjects.length; i++) {
        this.allObjects[i].move()
    }
}

Game.prototype.wrap = function (pos) {
    let x = pos[0]
    let y = pos[1]

    let newx = x % this.DIM_X;
    let newy = y % this.DIM_Y;

    if (newx < 0) {
        newx = newx + this.DIM_X
    }

    if (newy < 0) {
        newy = newy + this.DIM_Y
    }

    return [newx, newy];
}


Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.allObjects.length; i++) {
        for (let j = i + 1; j < this.allObjects.length; j++) {

    
           if (this.allObjects[i].isCollidedWith(this.allObjects[j])) {
                this.allObjects[i].collideWith(this.allObjects[j]);
            } 
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();


}

Game.prototype.remove = function(asteroid){
    let index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
} 


Game.prototype.allObjects = function() {
    return this.asteroids.push(this.ship);
}
module.exports = Game;