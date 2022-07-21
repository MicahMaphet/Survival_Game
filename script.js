import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";

class moveable {
  constructor(x = 0, y = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}
// The middle of the avaiable window
export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 20);
export const goblin = new moveable(2500, 2500, 10);
export const background = new moveable(-2500, -2500);
//the background width is 5000;
function run() {
  Playertick();
  Maptick();
    setTimeout(run, 50); // this controls how fast
                         // the program can run
}

run();
