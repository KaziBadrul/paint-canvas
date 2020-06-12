let canvas = document.querySelector(".canvas");
let canvasArea = document.querySelector(".canvasArea");

const helpBtn = document.querySelector(".info");
const refreshBtn = document.querySelector(".deleteCanvas");
const penSizeSlider = document.querySelector("#slider");
const navBar = document.querySelector(".nav");
const penColorSelector = document.querySelector("#penColor");
const backgroundColorSelector = document.querySelector("#backgroundColor");

let ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let color;
let size;

let mouseDown;
let mouseX;
let mouseY;

function draw() {
    if (!mouseDown) return;
    let penWidth = penSizeSlider.value;
    let penColor = penColorSelector.value;
    // canvas.style.backgroundColor = backgroundColorSelector.value;
    console.log("X: " + mouseX + ", " + "Y: " + mouseY + ", Pencolor: " + penColor);
    ctx.strokeStyle = "" + penColor +"";
    ctx.lineWidth = penWidth + 5;
    ctx.lineCap = "round";
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
}

canvas.onmousedown = function() {
    mouseDown = true;
}

canvas.onmouseup = function() {
    mouseDown = false;
    draw();
    ctx.beginPath();
}

canvas.onmousemove = function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY - canvas.offsetTop;
    draw();
}

refreshBtn.onclick = function() {
    ctx.clearRect(0, 0, width, height);
}

backgroundColorSelector.onchange = function() {
    canvas.style.backgroundColor = backgroundColorSelector.value;
}

helpBtn.onclick = function() {
    alert("Clean - Cleans the canvas\nSize - Set the size of pen\nPen Color - Changes the color of pen\nCanvas Color - Changes the color of background");
}