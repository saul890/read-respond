var randomColor = Math.floor(Math.random()*16777215).toString(16);
let circleBtn = document.querySelector('#circle');
let squareBtn = document.querySelector('#square');

circleBtn.addEventListener('click', changeCircleColor);
squareBtn.addEventListener('click', changeSquareColor);


function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeCircleColor() {
    document.getElementById("circle").style.backgroundColor = randomColors();
}

function changeSquareColor() {
    document.getElementById("square").style.backgroundColor = randomColors();
}