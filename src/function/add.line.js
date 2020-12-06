import { objects } from "../../script.js";
import { Line } from "../model/Line.js";

export default function addLine() {
  if (objects.selected.length === 2) {
    objects.all.push(new Line(objects.selected[0], objects.selected[1]));

    objects.selected = [];
  }
}
