import { ctx } from "../../script.js";

export class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  render() {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.stroke();
  }
}
