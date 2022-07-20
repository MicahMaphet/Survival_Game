import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";
class moveable {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
export const player = new moveable(0, 0);
export const background = new moveable(0, 0);

function run() {
  Playertick();
  Maptick();
    setTimeout(run, 0);
}

run();