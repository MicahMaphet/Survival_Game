import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";

class moveable {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
export const player = new moveable(100, 100);
export const background = new moveable(-2500, -2500);

function run() {
  Playertick();
  Maptick();
    setTimeout(run, 50); // this controls how fast
                         // the program can run
}

run();
