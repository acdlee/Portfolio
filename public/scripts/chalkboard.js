"use strict";

// Setup for canvas drawing
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
ctx.fillStyle = "#31343A";

// Coords used for drawing
let coords = {x: 0, y: 0};

// Fill canvas with chalkboard color
ctx.fillRect(0, 0, 500, 500);

// Updates coordinate values; handles margin offset
const setCoords = (e) => {
    coords.x = e.clientX - canvas.offsetLeft;   // Thank goodness I found these offset properties!
    coords.y = e.clientY - canvas.offsetTop;
};

// Draws coordinates 'coords' on the canvas
const draw = (e) => {
    if (e.buttons !== 1) return;    // only draw while mousedown is true

    ctx.beginPath();                // begin the stroke

    // stroke style values
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';

    // move line start, update coords on move, draw line to final destination
    ctx.moveTo(coords.x, coords.y);
    setCoords(e);
    ctx.lineTo(coords.x, coords.y);

    // draw!
    ctx.stroke();
};

// window.addEventListener('resize', updateOffsets);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setCoords);
canvas.addEventListener('mouseenter', setCoords);
