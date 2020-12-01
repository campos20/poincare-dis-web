import Base from "./Base.js";
import { ctx } from "../../script.js";

const getRandom = () => Math.floor(Math.random() * 255);

export default class Point extends Base {
  constructor(x, y) {
    let size = 20;
    super(x, y);
    this.size = size;
    this.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  }

  render() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
