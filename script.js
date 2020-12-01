import drawNavbar, { selectedAction } from "./src/navbar.js";

drawNavbar();

const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 68);

const circleRadius = Math.min(width, height) / 2;

export const objects = { all: [], selected: [] };

let drag = false;

canvas.addEventListener(
  "mousedown",
  function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    selectedAction.action(evt.clientX - rect.left, evt.clientY - rect.top);
  },
  false
);

canvas.addEventListener(
  "mouseup",
  function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log(evt);
    drag = false;
    objects.selected = [];
  },
  false
);

canvas.addEventListener("mousemove", function (evt) {
  evt.preventDefault();
  evt.stopPropagation();

  objects.selected.forEach((object) => {
    object.move(evt.clientX - rect.left, evt.clientY - rect.top);
  });
});

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

  objects.all.forEach((oject) => oject.render());

  requestAnimationFrame(loop);
}
loop();
