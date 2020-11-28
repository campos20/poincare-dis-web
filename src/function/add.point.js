import Point from "../model/Point.js";
import { objects } from "../../script.js";

export default function addPoint(x, y) {
  objects.push(new Point(x, y));
}
