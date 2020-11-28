const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 68);

const circleRadius = Math.min(width, height) / 2;

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

  requestAnimationFrame(loop);
}
loop();
