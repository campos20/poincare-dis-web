import Point from "../model/Point.js";
import { objects } from "../../script.js";

export default function addPoint(x, y) {
  objects.all.push(new Point(x, y));
}
