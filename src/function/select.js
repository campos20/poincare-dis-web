import { objects } from "../../script.js";
import { distance } from "../util/point.util.js";

const minDistance = 50;

export default function select(x, y) {
  for (let i = 0; i < objects.all.length; i++) {
    let object = objects.all[i];
    if (distance(x, y, object.x, object.y) < minDistance) {
      objects.selected.push(object);
      return;
    }
  }
  objects.selected = [];
}
