import drawNavbar, { selectedAction } from "./src/navbar.js";

drawNavbar();

const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 68);

const circleRadius = Math.min(width, height) / 2;

export const objects = [];
export const selectedObjects = [];

canvas.addEventListener(
  "click",
  function (evt) {
    console.log(evt);
    selectedAction.action(evt.clientX - rect.left, evt.clientY - rect.top);
  },
  false
);

function drawMainCircle() {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(width / 2, height / 2, circleRadius, 0, 2 * Math.PI);
  ctx.fill();
}

function loop() {
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, width, height);

  drawMainCircle();

  objects.forEach((oject) => oject.render());

  requestAnimationFrame(loop);
}
loop();
