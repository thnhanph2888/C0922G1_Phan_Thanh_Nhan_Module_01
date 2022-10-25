/**
 * Created by nhatnk on 4/26/17.
 */
let maxWidth = 1000;
let maxHeight = 500;
let a = 0;
var i;

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
    }
    this.moveLeft = function () {
        this.left -= 20;
    }
    this.moveTop = function () {
        this.top -= 20;
    }
    this.moveBottom = function () {
        this.top += 20;
    }
}

var hero = new Hero('nobita.png', 20, 30, 200);

function start() {
    a = Math.ceil(Math.random() * 5);

    switch (a) {
        case 0:
            hero.moveRight();
            document.getElementById("game").innerHTML = hero.getHeroElement();
            break;
        case 1:
            hero.moveLeft();
            document.getElementById("game").innerHTML = hero.getHeroElement();
            break;
        case 2:
            hero.moveTop();
            document.getElementById("game").innerHTML = hero.getHeroElement();
            break;
        case 3:
            hero.moveBottom();
            document.getElementById("game").innerHTML = hero.getHeroElement();
            break;
        default:
            hero.moveRight();
            document.getElementById("game").innerHTML = hero.getHeroElement();
            break;
    }
    setTimeout(start,300);
}

start();