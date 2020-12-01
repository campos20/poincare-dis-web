import drawNavbar, { selectedAction } from "./src/navbar.js";
import { distance } from "./src/util/point.util.js";

const minDistance = 50;

drawNavbar();

const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 68);

const circleRadius = Math.min(width, height) / 2;

export const objects = { all: [], selected: [] };

let drag = false;
let prevX = null;
let prevY = null;

const offsetX = (x) => x - rect.left;
const offsetY = (y) => y - rect.top;

function selectObjects(x, y) {
  for (let i = objects.all.length - 1; i >= 0; i--) {
    let object = objects.all[i];
    if (distance(x, y, object.x, object.y) < minDistance) {
      objects.selected.push(object);
      break;
    }
  }
}

canvas.addEventListener(
  "mousedown",
  function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    // We use these to deselect objects
    let previousSelectedItems = objects.selected.length;
    let previousCreatedElements = objects.all.length;

    let x = offsetX(evt.clientX);
    let y = offsetY(evt.clientY);

    prevX = x;
    prevY = y;

    selectObjects(x, y);

    if (!!selectedAction.action) {
      selectedAction.action(x, y);
    }

    if (selectedAction.name === "select") {
      drag = true;
    }

    // Selects elements, unless some object were created
    if (previousCreatedElements !== objects.all.length) {
      objects.selected.pop();
    }

    // In case no object were selected, we clear them all
    if (previousSelectedItems === objects.selected.length) {
      objects.selected = [];
    }
  },
  false
);

canvas.addEventListener(
  "mouseup",
  function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    drag = false;
  },
  false
);

canvas.addEventListener("mousemove", function (evt) {
  evt.preventDefault();
  evt.stopPropagation();

  if (drag) {
    let x = offsetX(evt.clientX);
    let y = offsetY(evt.clientY);

    let dx = x - prevX;
    let dy = y - prevY;

    prevX = x;
    prevY = y;

    objects.selected.forEach((object) => {
      object.move(dx, dy);
    });
  }
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

  objects.selected.forEach((object) => {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(object.x, object.y, object.size + 5, 0, 2 * Math.PI);
    ctx.fill();
  });
  objects.all.forEach((oject) => oject.render());

  requestAnimationFrame(loop);
}
loop();
