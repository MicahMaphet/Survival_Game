import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";

export class moveable {
  constructor(x = 0, y = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}
// The middle of the avaiable window

export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 2.5);

export const background = new moveable(-2500, -2500);

export const Goblins_x = [2000, 1000, 4000];
export const Goblins_y = [2000, 1500, 3000];

var goblinspeed = 1.5;

export const goblin = new moveable(Goblins_x[0], Goblins_y[0], goblinspeed);

export const goblin2 = new moveable(Goblins_x[1], Goblins_y[1], goblinspeed);

export const goblin3 = new moveable(Goblins_x[2], Goblins_y[2], goblinspeed);

export const goblin4 = new moveable(Goblins_x[3], Goblins_y[3], goblinspeed);

// up to here is just setting values

// the background width is 5000, this is so the player
// is in the center of the map
function run() {
 Playertick();
 Maptick();
    setTimeout(run, 10); // this controls how fast
                         // the program can run
}

run();
// run() starts the infinited loop
