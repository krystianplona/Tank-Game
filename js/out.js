/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {

  var LAND = "land";
  var BRICK = "brick";
  var BLOCK = "block";
  var WATER = "water";
  var GREEN = "green";
  var EAGLE = "eagle";

  var game = document.querySelector(".game");

  var map = [[LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, WATER, LAND, WATER, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, GREEN, LAND, BRICK, BRICK, BLOCK, LAND, BRICK, BRICK], [LAND, LAND, LAND, LAND, LAND, GREEN, LAND, LAND, LAND, BLOCK, LAND, BRICK, EAGLE], [LAND, BRICK, BRICK, BRICK, BRICK, GREEN, LAND, BRICK, BRICK, BLOCK, LAND, BRICK, BRICK], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, WATER, LAND, WATER, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND]];

  function showMap() {
    var position = 0;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        position = i + "," + j;
        var div = document.createElement("div");
        div.id = position;
        game.appendChild(div);
      }
    }
  }

  var Block = function Block(x, y) {
    _classCallCheck(this, Block);

    _initialiseProps.call(this);

    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.id = 0;
  };

  var _initialiseProps = function _initialiseProps() {
    this.createBlock = function () {};

    this.delBlock = function () {
      var div = document.getElementById(x + "," + y);
      div.removeChild(div.childNodes[0]);
      landMap[x][y] = LAND;
    };
  };

  var Brick = function (_Block) {
    _inherits(Brick, _Block);

    function Brick(x, y) {
      _classCallCheck(this, Brick);

      var _this = _possibleConstructorReturn(this, (Brick.__proto__ || Object.getPrototypeOf(Brick)).call(this, x, y));

      _this.createBlock = function () {
        var brick = document.createElement('div');
        brick.className = "brick";
        brick.style.position = "absolute";
        brick.style.width = _this.width + "px";
        brick.style.height = _this.height + "px";
        brick.style.left = _this.x * _this.width + "px";
        brick.style.top = _this.y * _this.height + "px";
        brick.dataset.hp = _this.hp;

        document.getElementById(_this.x + "," + _this.y).appendChild(brick);
      };

      _this.hp = 1;
      return _this;
    }

    return Brick;
  }(Block);

  var Land = function (_Block2) {
    _inherits(Land, _Block2);

    function Land(x, y) {
      _classCallCheck(this, Land);

      var _this2 = _possibleConstructorReturn(this, (Land.__proto__ || Object.getPrototypeOf(Land)).call(this, x, y));

      _this2.createBlock = function () {
        var land = document.createElement('div');
        land.className = "land";
        land.style.position = "absolute";
        land.style.width = _this2.width + "px";
        land.style.height = _this2.height + "px";
        land.style.left = _this2.x * _this2.width + "px";
        land.style.top = _this2.y * _this2.height + "px";
        document.getElementById(_this2.x + "," + _this2.y).appendChild(land);
      };

      return _this2;
    }

    return Land;
  }(Block);

  var Eagle = function (_Block3) {
    _inherits(Eagle, _Block3);

    function Eagle(x, y) {
      _classCallCheck(this, Eagle);

      var _this3 = _possibleConstructorReturn(this, (Eagle.__proto__ || Object.getPrototypeOf(Eagle)).call(this, x, y));

      _this3.createBlock = function () {
        var eagle = document.createElement('div');
        eagle.className = "eagle";
        eagle.style.position = "absolute";
        eagle.style.width = _this3.width + "px";
        eagle.style.height = _this3.height + "px";
        eagle.style.left = _this3.x * _this3.width + "px";
        eagle.style.top = _this3.y * _this3.height + "px";
        document.getElementById(_this3.x + "," + _this3.y).appendChild(eagle);
      };

      _this3.hp = 1;
      return _this3;
    }

    return Eagle;
  }(Block);

  var HardBlock = function (_Block4) {
    _inherits(HardBlock, _Block4);

    function HardBlock(x, y) {
      _classCallCheck(this, HardBlock);

      var _this4 = _possibleConstructorReturn(this, (HardBlock.__proto__ || Object.getPrototypeOf(HardBlock)).call(this, x, y));

      _this4.createBlock = function () {
        var harblock = document.createElement('div');
        harblock.className = "block";
        harblock.style.position = "absolute";
        harblock.style.width = _this4.width + "px";
        harblock.style.height = _this4.height + "px";
        harblock.style.left = _this4.x * _this4.width + "px";
        harblock.style.top = _this4.y * _this4.height + "px";
        harblock.dataset.hp = _this4.hp;
        document.getElementById(_this4.x + "," + _this4.y).appendChild(harblock);
      };

      _this4.hp = 100;
      return _this4;
    }

    return HardBlock;
  }(Block);

  var Water = function (_Block5) {
    _inherits(Water, _Block5);

    function Water(x, y) {
      _classCallCheck(this, Water);

      var _this5 = _possibleConstructorReturn(this, (Water.__proto__ || Object.getPrototypeOf(Water)).call(this, x, y));

      _this5.createBlock = function () {
        var water = document.createElement('div');
        water.className = "water";
        water.style.position = "absolute";
        water.style.width = _this5.width + "px";
        water.style.height = _this5.height + "px";
        water.style.left = _this5.x * _this5.width + "px";
        water.style.top = _this5.y * _this5.height + "px";
        document.getElementById(_this5.x + "," + _this5.y).appendChild(water);
      };

      return _this5;
    }

    return Water;
  }(Block);

  var Green = function (_Block6) {
    _inherits(Green, _Block6);

    function Green(x, y) {
      _classCallCheck(this, Green);

      var _this6 = _possibleConstructorReturn(this, (Green.__proto__ || Object.getPrototypeOf(Green)).call(this, x, y));

      _this6.createBlock = function () {
        var grass = document.createElement('div');
        grass.className = "green";
        grass.style.position = "absolute";
        grass.style.width = _this6.width + "px";
        grass.style.height = _this6.height + "px";
        grass.style.left = _this6.x * _this6.width + "px";
        grass.style.top = _this6.y * _this6.height + "px";
        document.getElementById(_this6.x + "," + _this6.y).appendChild(grass);
      };

      return _this6;
    }

    return Green;
  }(Block);

  var Bullet = function (_Block7) {
    _inherits(Bullet, _Block7);

    function Bullet(x, y) {
      _classCallCheck(this, Bullet);

      var _this7 = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, x, y));

      _this7.createBullet = function () {
        var bullet = document.createElement('div');
        bullet.className = "boom";
        bullet.style.position = "absolute";
        bullet.style.width = _this7.width + "px";
        bullet.style.height = _this7.height + "px";
        bullet.style.left = _this7.x * _this7.width + "px";
        bullet.style.top = _this7.y * _this7.height + "px";
        document.getElementById("bullet").appendChild(bullet);
      };

      return _this7;
    }

    return Bullet;
  }(Block);

  var Player = function (_Block8) {
    _inherits(Player, _Block8);

    function Player() {
      _classCallCheck(this, Player);

      var _this8 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

      _this8.createPlayer = function () {
        var player = document.createElement('div');
        player.className = "myTank";
        player.style.position = "absolute";
        player.style.width = _this8.width + "px";
        player.style.height = _this8.height + "px";
        player.style.left = 200 + "px";
        player.style.top = 600 + "px";
        player.style.zIndex = 1;
        document.getElementById("player").appendChild(player);
      };

      _this8.checkCollision = function (x, y) {
        var ifundefined = document.getElementById(x + "," + y);
        if (ifundefined !== undefined && ifundefined !== null) {
          var blockType = document.getElementById(x + "," + y).children[0].className;
          if (blockType == "brick" || blockType == "block" || blockType == "eagle" || blockType == "water") {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      };

      _this8.fireCheckCollision = function (x, y) {
        var blockType = document.getElementById(x + "," + y).children[0].className;
        var data = Number(document.getElementById(x + "," + y).children[0].dataset.hp);
        if (blockType == "brick" || blockType == "eagle" || blockType == "block") {
          if (blockType == "eagle") {
            _this8.gameOver();
          }
          return true;
        } else {
          return false;
        }
      };

      _this8.gameOver = function () {
        var over = document.createElement("div");
        over.className = "gameOver";
        over.innerText = "GAME OVER";
        game.innerHTML = "";
        game.appendChild(over);
        for (var i = 1; i < 99999; i++) {
          window.clearInterval(i);
        }
      };

      _this8.moveUp = function () {
        _this8.direction = "up";
        var show = document.getElementById(_this8.x + "," + (_this8.y - 1));
        var up = document.getElementById("player").children[0];
        up.style.transform = 'rotate(' + 0 + 'deg)';
        if (_this8.checkCollision(_this8.x, _this8.y - 1) && _this8.y > 0) {
          var _up = document.getElementById("player").children[0];
          _up.style.top = _this8.positionY - 50 + "px";
          _this8.positionY -= 50;
          _this8.y -= 1;
        }
      };

      _this8.moveDown = function () {
        _this8.direction = "down";
        var up = document.getElementById("player").children[0];
        up.style.transform = 'rotate(' + 180 + 'deg)';
        var show = document.getElementById(_this8.x + "," + (_this8.y + 1));
        if (_this8.checkCollision(_this8.x, _this8.y + 1) && _this8.y < 12) {
          var down = document.getElementById("player").children[0];
          down.style.top = _this8.positionY + 50 + "px";
          _this8.positionY += 50;
          _this8.y += 1;
        }
      };

      _this8.moveLeft = function () {
        _this8.direction = "left";
        var show = document.getElementById(_this8.x - 1 + "," + _this8.y);
        var up = document.getElementById("player").children[0];
        up.style.transform = 'rotate(' + 270 + 'deg)';
        if (_this8.checkCollision(_this8.x - 1, _this8.y) && _this8.x > 0) {
          var left = document.getElementById("player").children[0];
          left.style.left = _this8.positionX - 50 + "px";
          _this8.positionX -= 50;
          _this8.x -= 1;
        }
      };

      _this8.moveRight = function () {
        _this8.direction = "right";
        var show = document.getElementById(_this8.x + 1 + "," + _this8.y);
        var up = document.getElementById("player").children[0];
        up.style.transform = 'rotate(' + 90 + 'deg)';
        if (_this8.checkCollision(_this8.x + 1, _this8.y) && _this8.x < 12) {
          var right = document.getElementById("player").children[0];
          right.style.left = _this8.positionX + 50 + "px";
          _this8.positionX += 50;
          _this8.x += 1;
        }
      };

      _this8.moveTank = function (event) {
        switch (event.which) {
          case 37:
            _this8.moveLeft();
            break;
          case 38:
            _this8.moveUp();
            break;
          case 39:
            _this8.moveRight();
            break;
          case 40:
            _this8.moveDown();
            break;
          case 65:
            _this8.fireTank();
            break;
        }
      };

      _this8.fireTank = function () {
        if (_this8.direction == "up") {
          var dir = String(_this8.x + "," + (_this8.y - 1));
          var fire = document.getElementById(dir);
          if (_this8.fireCheckCollision(_this8.x, _this8.y - 1)) {
            var checkdmg = fire.children[0].className;
            if (checkdmg == "block") {
              bullet.children[0].innerHTML = "";
              _this8.fireBool = true;
              clearInterval(_this8.interval);
            } else {
              fire.children[0].className = "land";
            }
          } else {
            if (_this8.fireBool) {
              _this8.fireBool = false;
              var bul = new Bullet(_this8.x, _this8.y - 1);
              bul.createBullet();
              var _bullet = document.getElementById("bullet").children[0];
              _this8.interval = setInterval(function () {
                var destroy = $(".boom").collision(".enemy");
                var parent = destroy.parent();
                if (parent[0] !== undefined) {
                  if (parent[0].id == "enemy0") {
                    document.getElementById("enemy0").innerHTML = "";
                    _bullet.parentNode.innerHTML = "";
                    _this8.points = _this8.points + 1;
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy1") {
                    document.getElementById("enemy1").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy2") {
                    document.getElementById("enemy2").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  }
                }
                _bullet.style.left = bul.x * 50 + "px";
                _bullet.style.top = (bul.y - 1) * 50 + "px";
                bul.y = bul.y - 1;
                if (bul.y >= 0) {
                  var div = document.getElementById(bul.x + "," + bul.y);
                  if (_this8.fireCheckCollision(bul.x, bul.y)) {
                    var checkdmg = document.getElementById(bul.x + "," + bul.y).children[0].className;
                    if (checkdmg == "block") {
                      _bullet.parentNode.innerHTML = "";
                      _this8.fireBool = true;
                      clearInterval(_this8.interval);
                    } else {
                      document.getElementById(bul.x + "," + bul.y).children[0].className = "land";
                      _bullet.parentNode.innerHTML = "";
                      _this8.fireBool = true;
                      clearInterval(_this8.interval);
                    }
                  }
                } else {
                  clearInterval(_this8.interval);
                  _this8.fireBool = true;
                }
              }, 250);
            }
          }
        } else if (_this8.direction == "down") {
          var _dir = String(_this8.x + "," + (_this8.y + 1));
          var fire = document.getElementById(_dir);
          if (_this8.fireCheckCollision(_this8.x, _this8.y + 1)) {
            var checkdmg = fire.children[0].className;
            if (checkdmg == "block") {
              bullet.children[0].innerHTML = "";
              _this8.fireBool = true;
              clearInterval(_this8.interval);
            } else {
              fire.children[0].className = "land";
            }
          } else {
            if (_this8.fireBool) {
              _this8.fireBool = false;
              var _bul = new Bullet(_this8.x, _this8.y + 1);
              _bul.createBullet();
              var _bullet2 = document.getElementById("bullet").children[0];
              _this8.interval = setInterval(function () {
                var destroy = $(".boom").collision(".enemy");
                var parent = destroy.parent();
                if (parent[0] !== undefined) {
                  if (parent[0].id == "enemy0") {
                    document.getElementById("enemy0").innerHTML = "";
                    _bullet2.parentNode.innerHTML = "";
                    _this8.points = _this8.points + 1;
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy1") {
                    document.getElementById("enemy1").innerHTML = "";
                    _bullet2.parentNode.innerHTML = "";
                    _this8.points = _this8.points + 1;
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy2") {
                    document.getElementById("enemy2").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet2.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  }
                }
                _bullet2.style.left = _bul.x * 50 + "px";
                _bullet2.style.top = (_bul.y + 1) * 50 + "px";
                _bullet2.style.transform = 'rotate(' + 180 + 'deg)';
                _bul.y = _bul.y + 1;
                if (_bul.y <= 12) {
                  if (_this8.fireCheckCollision(_bul.x, _bul.y)) {
                    var checkdmg = document.getElementById(_bul.x + "," + _bul.y).children[0].className;
                    if (checkdmg == "block") {
                      if (_bullet2.parentNode !== undefined && _bullet2.parentNode !== null) {
                        _bullet2.parentNode.innerHTML = "";
                        _this8.fireBool = true;
                        clearInterval(_this8.interval);
                      }
                    } else {
                      if (_bullet2.parentNode !== undefined && _bullet2.parentNode !== null) {
                        document.getElementById(_bul.x + "," + _bul.y).children[0].className = "land";
                        _bullet2.parentNode.innerHTML = "";
                        _this8.fireBool = true;
                        clearInterval(_this8.interval);
                      }
                    }
                  }
                } else {
                  _bullet2.parentNode.innerHTML = "";
                  clearInterval(_this8.interval);
                  _this8.fireBool = true;
                }
              }, 250);
            }
          }
        } else if (_this8.direction == "left") {
          var _dir2 = String(_this8.x - 1 + "," + _this8.y);
          var fire = document.getElementById(_dir2);
          if (_this8.fireCheckCollision(_this8.x - 1, _this8.y)) {
            var checkdmg = fire.children[0].className;
            if (checkdmg == "block") {
              bullet.children[0].innerHTML = "";
              _this8.fireBool = true;
              clearInterval(_this8.interval);
            } else {
              fire.children[0].className = "land";
            }
          } else {
            if (_this8.fireBool) {
              _this8.fireBool = false;
              var _bul2 = new Bullet(_this8.x - 1, _this8.y);
              _bul2.createBullet();
              var _bullet3 = document.getElementById("bullet").children[0];
              _bullet3.style.transform = 'rotate(' + 270 + 'deg)';
              _this8.interval = setInterval(function () {
                var destroy = $(".boom").collision(".enemy");
                var parent = destroy.parent();
                if (parent[0] !== undefined) {
                  if (parent[0].id == "enemy0") {
                    document.getElementById("enemy0").innerHTML = "";
                    _bullet3.parentNode.innerHTML = "";
                    _this8.points = _this8.points + 1;
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy1") {
                    document.getElementById("enemy1").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet3.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy2") {
                    document.getElementById("enemy2").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet3.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  }
                }
                _bullet3.style.left = (_bul2.x - 1) * 50 + "px";
                _bullet3.style.top = _bul2.y * 50 + "px";
                _bul2.x = _bul2.x - 1;
                if (_bul2.x >= 0) {
                  if (_this8.fireCheckCollision(_bul2.x, _bul2.y)) {
                    var checkdmg = document.getElementById(_bul2.x + "," + _bul2.y).children[0].className;
                    if (checkdmg == "block") {
                      if (_bullet3.parentNode !== undefined && _bullet3.parentNode !== null) {
                        _bullet3.parentNode.innerHTML = "";
                        _this8.fireBool = true;
                        clearInterval(_this8.interval);
                      }
                    } else {
                      if (_bullet3.parentNode !== undefined && _bullet3.parentNode !== null) {
                        document.getElementById(_bul2.x + "," + _bul2.y).children[0].className = "land";
                        _bullet3.parentNode.innerHTML = "";
                        _this8.fireBool = true;
                        clearInterval(_this8.interval);
                      }
                    }
                  }
                } else {
                  clearInterval(_this8.interval);
                  _bullet3.parentNode.innerHTML = "";
                  _this8.fireBool = true;
                }
              }, 250);
            }
          }
        } else if (_this8.direction == "right") {
          var _dir3 = String(_this8.x + 1 + "," + _this8.y);
          var fire = document.getElementById(_dir3);
          if (_this8.fireCheckCollision(_this8.x + 1, _this8.y)) {
            var checkdmg = fire.children[0].className;
            if (checkdmg == "block") {
              bullet.children[0].innerHTML = "";
              _this8.fireBool = true;
              clearInterval(_this8.interval);
            } else {
              fire.children[0].className = "land";
            }
          } else {
            if (_this8.fireBool) {
              _this8.fireBool = false;
              var _bul3 = new Bullet(_this8.x + 1, _this8.y);
              _bul3.createBullet();
              var _bullet4 = document.getElementById("bullet").children[0];
              _bullet4.style.transform = 'rotate(' + 90 + 'deg)';
              _this8.interval = setInterval(function () {
                var destroy = $(".boom").collision(".enemy");
                var parent = destroy.parent();
                if (parent[0] !== undefined) {
                  if (parent[0].id == "enemy0") {
                    document.getElementById("enemy0").innerHTML = "";
                    _bullet4.parentNode.innerHTML = "";
                    _this8.points = _this8.points + 1;
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy1") {
                    document.getElementById("enemy1").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet4.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  } else if (parent[0].id == "enemy2") {
                    document.getElementById("enemy2").innerHTML = "";
                    _this8.points = _this8.points + 1;
                    _bullet4.parentNode.innerHTML = "";
                    clearInterval(_this8.interval);
                    _this8.nextRound();
                  }
                } else {
                  _bullet4.style.left = (_bul3.x + 1) * 50 + "px";
                  _bullet4.style.top = _bul3.y * 50 + "px";
                  _bul3.x = _bul3.x + 1;
                  if (_bul3.x <= 12) {
                    if (_this8.fireCheckCollision(_bul3.x, _bul3.y)) {
                      var checkdmg = document.getElementById(_bul3.x + "," + _bul3.y).children[0].className;
                      if (checkdmg == "block") {
                        if (_bullet4.parentNode !== undefined && _bullet4.parentNode !== null) {
                          _bullet4.parentNode.innerHTML = "";
                          _this8.fireBool = true;
                          clearInterval(_this8.interval);
                        }
                      } else {
                        if (_bullet4.parentNode !== undefined && _bullet4.parentNode !== null) {
                          document.getElementById(_bul3.x + "," + _bul3.y).children[0].className = "land";
                          _bullet4.parentNode.innerHTML = "";
                          _this8.fireBool = true;
                          clearInterval(_this8.interval);
                        }
                      }
                    }
                  } else {
                    clearInterval(_this8.interval);
                    _this8.fireBool = true;
                    _bullet4.parentNode.innerHTML = "";
                  }
                }
              }, 250);
            }
          }
        }
      };

      _this8.win = function () {
        for (var i = 1; i < 99999; i++) {
          window.clearInterval(i);
        }
        // enemy0 =null;
        // enemy1 =null;
        // enemy2 =null;
        // window.location = "http://disco.fleo.se/YouWin";

        // var win = document.querySelector("#game")
        // win.innerHTML = "";
        // win.className="win"
        // var youwin = document.createElement("iframe");
        // youwin.style.width = "100vw";
        // youwin.style.height = "100vh";
        // youwin.src = "http://disco.fleo.se/YouWin";
        // win.appendChild(youwin);
        var win = document.querySelector("#game");
        win.innerHTML = "";
        win.innerText = "YOU WIN";
      };

      _this8.nextRound = function () {
        _this8.fireBool = true;
        var points = _this8.points % 3;
        if (points == 0) {
          for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
          }
          _this8.respawn = _this8.respawn + 1;
          var enemy0 = new Enemy(0, _this8.respawn, 0);
          enemy0.createEnemy();
          var enemy1 = new Enemy(6, _this8.respawn, 1);
          enemy1.createEnemy();
          var enemy2 = new Enemy(12, _this8.respawn, 2);
          enemy2.createEnemy();
          if (_this8.respawn == 5) {
            _this8.win();
          }
          enemy0.moveTank();
          enemy1.moveTank();
          enemy2.moveTank();
        }
      };

      _this8.x = 4;
      _this8.y = 12;
      _this8.positionX = 200;
      _this8.positionY = 600;
      _this8.direction = "up";
      _this8.dmg = 1;
      _this8.fireBool = true;
      _this8.respawn = 0;
      _this8.points = 0;
      return _this8;
    }
    /////////////////////////

    /////////////////////////

    /////////////////////////

    /////////////////////////

    /////////////////////////

    /////////////////////////

    /////////////////////////

    /////////////////////////

    ////////////////////////

    ////////////////////////

    ////////////////////////

    ////////////////////////


    return Player;
  }(Block);

  var Enemy = function (_Block9) {
    _inherits(Enemy, _Block9);

    function Enemy(x, y, z) {
      _classCallCheck(this, Enemy);

      var _this9 = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this));

      _initialiseProps2.call(_this9);

      _this9.x = x;
      _this9.y = y;
      _this9.z = z;
      _this9.direction = 1;
      return _this9;
    }

    return Enemy;
  }(Block);

  var _initialiseProps2 = function _initialiseProps2() {
    var _this10 = this;

    this.createEnemy = function () {
      var enemy = document.createElement('div');
      enemy.className = "enemy";
      enemy.style.position = "absolute";
      enemy.style.width = _this10.width + "px";
      enemy.style.height = _this10.height + "px";
      enemy.style.left = _this10.x * 50 + "px";
      enemy.style.top = _this10.y * 50 + "px";
      enemy.style.zIndex = 1;
      var name = "enemy" + _this10.z;
      document.getElementById(name).appendChild(enemy);
    };

    this.checkCollision = function (x, y) {
      var ifblock = document.getElementById(x + "," + y);
      if (ifblock !== undefined && ifblock !== null) {
        var blockType = document.getElementById(x + "," + y).children[0].className;
        if (blockType == "brick" || blockType == "block" || blockType == "eagle" || blockType == "water") {
          return false;
        } else {
          return true;
        }
      }
    };

    this.fireCheckCollision = function (x, y) {
      var blockType = document.getElementById(x + "," + y).children[0].className;
      var data = Number(document.getElementById(x + "," + y).children[0].dataset.hp);
      if (blockType == "brick" || blockType == "eagle" || blockType == "block") {
        if (blockType == "eagle") {
          _this10.gameOver();
        }
        return true;
      } else {
        return false;
      }
    };

    this.gameOver = function () {
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
      }
      var over = document.createElement("div");
      over.className = "gameOver";
      over.innerText = "GAME OVER";
      game.innerHTML = "";
      game.appendChild(over);
    };

    this.moveDown = function () {
      var down = document.getElementById("enemy" + _this10.z).children[0];
      if (down !== undefined && down !== null) {
        down.style.transform = 'rotate(' + 180 + 'deg)';
        var show = document.getElementById(_this10.x + "," + (_this10.y + 1));
        if (show !== undefined && show !== null) {
          if (_this10.checkCollision(_this10.x, _this10.y + 1) && _this10.y < 12) {
            down.style.top = _this10.y * 50 + 50 + "px";
            _this10.y += 1;
          }
          if (show.children[0].className == "brick") {
            show.children[0].className = "land";
          }
          if (show.children[0].className == "eagle") {
            _this10.gameOver();
          }
        }
      }
      var destroy = $(".enemy").collision(".myTank");
      var ifundefined = destroy[0];
      if (ifundefined !== undefined) {
        if (ifundefined.className !== undefined) {
          if (destroy[0].className == "myTank") {
            _this10.gameOver();
          }
        }
      }
    };

    this.moveUp = function () {
      var up = document.getElementById("enemy" + _this10.z).children[0];
      if (up !== undefined && up !== null) {
        up.style.transform = 'rotate(' + 0 + 'deg)';
        var show = document.getElementById(_this10.x + "," + (_this10.y - 1));
        if (show !== undefined && show !== null) {
          if (_this10.checkCollision(_this10.x, _this10.y - 1) && _this10.y > 0) {
            up.style.top = _this10.y * 50 - 50 + "px";
            _this10.y -= 1;
          }
          if (show.children[0].className == "brick") {
            show.children[0].className = "land";
          }
          if (show.children[0].className == "eagle") {
            _this10.gameOver();
          }
        }
      }
      var destroy = $(".enemy").collision(".myTank");
      var ifundefined = destroy[0];
      if (ifundefined !== undefined) {
        if (destroy[0].className == "myTank") {
          _this10.gameOver();
        }
      }
    };

    this.moveLeft = function () {
      var left = document.getElementById("enemy" + _this10.z).children[0];
      if (left !== undefined && left !== null) {
        left.style.transform = 'rotate(' + 270 + 'deg)';
        var show = document.getElementById(_this10.x - 1 + "," + _this10.y);
        if (show !== undefined && show !== null) {
          if (_this10.checkCollision(_this10.x - 1, _this10.y) && _this10.x > 0) {
            left.style.left = _this10.x * 50 - 50 + "px";
            _this10.x -= 1;
            show.children[0].className = "land";
          }
          if (show.children[0].className == "brick") {
            show.children[0].className = "land";
          }
          if (show.children[0].className == "eagle") {
            _this10.gameOver();
          }
        }
      }
      var destroy = $(".enemy").collision(".myTank");
      var ifundefined = destroy.className;
      if (ifundefined !== undefined) {
        if (destroy[0].className == "myTank") {
          _this10.gameOver();
        }
      }
    };

    this.moveRight = function () {
      var right = document.getElementById("enemy" + _this10.z).children[0];
      if (right !== undefined && right !== null) {
        right.style.transform = 'rotate(' + 90 + 'deg)';
        var show = document.getElementById(_this10.x + 1 + "," + _this10.y);
        if (show !== undefined && show !== null) {
          if (_this10.checkCollision(_this10.x + 1, _this10.y) && _this10.x < 12) {
            right.style.left = _this10.x * 50 + 50 + "px";
            _this10.x += 1;
            show.children[0].className = "land";
          }
          if (show.children[0].className == "brick") {
            show.children[0].className = "land";
          }
          if (show.children[0].className == "eagle") {
            _this10.gameOver();
          }
        }
      }
      var destroy = $(".enemy").collision(".myTank");
      var ifundefined = destroy.className;
      if (ifundefined !== undefined) {
        if (destroy[0].className == "myTank") {
          _this10.gameOver();
        }
      }
    };

    this.moveTank = function () {
      _this10.enemyInterval = setInterval(function () {
        var rand = Math.round(Math.random() * 5) + 1;
        if (rand == 1 || rand == 5) {
          _this10.moveDown();
        } else if (rand == 2) {
          _this10.moveUp();
        } else if (rand == 3) {
          _this10.moveLeft();
        } else if (rand == 4) {
          _this10.moveRight();
        } else {
          return false;
        }
      }, 1000);
    };
  };

  function loadMap() {
    var block;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        var blocktype = map[i][j];
        switch (blocktype) {
          case LAND:
            block = new Land(i, j);
            block.createBlock();
            break;
          case BRICK:
            block = new Brick(i, j);
            block.createBlock();
            break;
          case EAGLE:
            block = new Eagle(i, j);
            block.createBlock();
            break;
          case BLOCK:
            block = new HardBlock(i, j);
            block.createBlock();
            break;
          case WATER:
            block = new Water(i, j);
            block.createBlock();
            break;
          case GREEN:
            block = new Green(i, j);
            block.createBlock();
            break;
          default:
            break;
        }
      }
    }
  }

  showMap();

  loadMap();

  var myTank = new Player();
  myTank.createPlayer();

  var enemy0 = new Enemy(0, 0, 0);
  enemy0.createEnemy();
  var enemy1 = new Enemy(6, 0, 1);
  enemy1.createEnemy();
  var enemy2 = new Enemy(12, 0, 2);
  enemy2.createEnemy();

  enemy0.moveTank();
  enemy1.moveTank();
  enemy2.moveTank();

  $(document).on("keydown", function (event) {
    myTank.moveTank(event);
  });
});

/***/ })
/******/ ]);