const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Util = require("./util.js");
window.Util = Util;

//Write Asteroid class

//in the constructor, the caller specifies the pos
//and calls the MovingObject superconstructor,
//setting color and radius to the Asteroid defaults,
//and choosing a random vector for vel

//set a default color and radius for Asteroids,
//as properties of the Asteroid class:
//      Asteroid.COLOR
//      Asteroid.RADIUS

function Asteroid(options) {
    let COLOR = "blue";
    let RADIUS = 30;
    let vel = Util.randomVec(5);

    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = vel;

    MovingObject.call(this, options);
};

Asteroid.prototype.collideWith = function(otherObject) {
    console.log("asteroid collideWith");

    if (otherObject instanceof Ship) {
        otherObject.relocate();
    };
};



//Inherit from MovingObject
Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;
