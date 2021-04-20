const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Util = require("./util.js");
window.Util = Util;

function Ship(options) {
    let COLOR = "red";
    let RADIUS = 15;
   
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = [0, 0];

    MovingObject.call(this, options);
};

//Inherit from MovingObject
Util.inherits(Ship, MovingObject);


module.exports = Ship;
