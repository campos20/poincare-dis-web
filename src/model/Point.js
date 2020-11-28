import Base from "./Base.js";
import { ctx } from "../../script.js";

export default class Point extends Base {
  constructor(x, y) {
    let size = 20;
    super(x, y);
    this.size = size;
    this.color = "rgb(0, 0, 0)";
  }

  render() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
