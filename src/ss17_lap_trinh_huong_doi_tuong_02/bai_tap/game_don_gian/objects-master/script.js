/**
 * Created by nhatnk on 4/26/17.
 */
let maxWidth = 1000;
let maxHeight = 500;
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

    this.moveRight = function (direction) {
        if (direction === "d"){
            this.left += 20;
        }
    }
    this.moveLeft = function (direction) {
        if (direction === "a"){
            this.left -= 20;
        }
    }
    this.moveTop = function (direction) {
        if (direction === "w"){
            this.top -= 20;
        }
    }
    this.moveBottom = function (direction) {
        if (direction === "s"){
            this.top += 20;
        }
    }

}

var hero = new Hero('nobita.png', 20, 30, 200);

function start() {
    let a = document.getElementById("move").value;
    hero.moveRight(a);
    hero.moveLeft(a);
    hero.moveTop(a);
    hero.moveBottom(a);
    document.getElementById("move").value = "";
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1);
}
start();