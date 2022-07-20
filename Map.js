import { background } from "./script.js"
// this is called from script.js in the run function
export function tick() {
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";
}