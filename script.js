import {tick as Playertick} from "./Player.js";
import {tick as Maptick, Goblins_x, Goblins_y} from "./Map.js";

export class moveable {
  constructor(x = 0, y = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}
// The middle of the avaiable window
export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 25);

export const goblin = new moveable(Goblins_x[0], Goblins_y[0], 10);
export const goblin2 = new moveable(Goblins_x[1], Goblins_y[1], 10);

export const background = new moveable(0, 0);
//the background width is 5000;
function run() {
 Playertick();
 Maptick();
    setTimeout(run, 50); // this controls how fast
                         // the program can run
}

run();
// run() starts the infinited loop
