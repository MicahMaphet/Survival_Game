import { background } from "./script.js"
export function tick() {
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";
}