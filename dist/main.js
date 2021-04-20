/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nwindow.Util = Util;\n\n//Write Asteroid class\n\n//in the constructor, the caller specifies the pos\n//and calls the MovingObject superconstructor,\n//setting color and radius to the Asteroid defaults,\n//and choosing a random vector for vel\n\n//set a default color and radius for Asteroids,\n//as properties of the Asteroid class:\n//      Asteroid.COLOR\n//      Asteroid.RADIUS\n\nfunction Asteroid(options) {\n    let COLOR = \"blue\";\n    let RADIUS = 30;\n    let vel = Util.randomVec(5);\n\n    options.color = COLOR;\n    options.radius = RADIUS;\n    options.vel = vel;\n\n    MovingObject.call(this, options);\n};\n\n\n\n//Inherit from MovingObject\nUtil.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nfunction Game(){\n    this.DIM_X = 500;\n    this.DIM_Y = 500;\n    this.NUM_ASTEROIDS = 5;\n    this.asteroids = [];\n} \n\nGame.prototype.randomPosition = function() {\n    let x = this.DIM_X * Math.random();\n    let y = this.DIM_Y * Math.random();\n    return [x,y];\n}\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n        let posn = this.randomPosition();\n        this.asteroids.push(new Asteroid({ pos: posn, game: this}) )\n    }\n}\n\nGame.prototype.draw = function(ctx) {\n    //call clearRect on the ctx to wipe down the entire space.\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n\n    //Call the draw method on each of the asteroids.\n    for (let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].draw(ctx)\n    }\n}\n\nGame.prototype.moveObjects = function () {\n    for (let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].move()\n    }\n}\n\nGame.prototype.wrap = function (pos) {\n    let x = pos[0]\n    let y = pos[1]\n\n    let newx = x % this.DIM_X;\n    let newy = y % this.DIM_Y;\n\n    if (newx < 0) {\n        newx = newx + this.DIM_X\n    }\n\n    if (newy < 0) {\n        newy = newy + this.DIM_Y\n    }\n\n    return [newx, newy];\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n    this.ctx = ctx;\n    this.game = new Game();\n    this.game.addAsteroids();\n}\n\nGameView.prototype.start = function() {\n    setInterval( () => {\n        this.game.moveObjects();\n        this.game.draw(this.ctx);\n    }, 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!!!!!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nwindow.Game = Game;\n\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEle = document.getElementById(\"game-canvas\");\n    canvasEle.width = 500;\n    canvasEle.height = 500;\n    const ctx = canvasEle.getContext(\"2d\");\n\n    //background\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 500, 500);\n    \n    // //MO object\n    // const mo1 = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n\n    // mo1.move();\n    // mo1.move();\n    // mo1.move();\n\n    // mo1.draw(ctx);\n\n\n    // const g = new Game();\n    // g.addAsteroids();\n    // g.draw(ctx);\n\n    const gv = new GameView(ctx);\n    gv.start();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n};\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n        );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] = this.pos[0] + this.vel[0];\n    this.pos[1] = this.pos[1] + this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n}\n\nmodule.exports = MovingObject;\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        let Surrogate = function () {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    \n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n  \nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;