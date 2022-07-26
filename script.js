import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";

export class moveable {
  constructor(x = 0, y = 0, speed = 0, hurt_width = 50, hurt_height = 50) {
    this.x = x;
    this.y = y;
    this.hurt_width = hurt_width;
    this.hurt_height = hurt_height;
    this.speed = speed;
  }
    corner1() {
    return [this.x, this.y]
  }
    corner2() {
    return [this.x, this.y + this.hurt_height]
  }
    corner3() {
    return [this.x + this.hurtwidth, this.y + this.hurt_height]
  }
    corner4() {
    return [this.x + this.hurt_width, this.y]
  }
  
}
// The middle of the avaiable window

export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 2.5);

export const background = new moveable(-2500, -2500);

export const Goblins_x = [2000, 1000, 4000, 4500];
export const Goblins_y = [2000, 1500, 3000, 3500];

var goblinspeed = 1.5;

export const goblin = new moveable(Goblins_x[0], Goblins_y[0], goblinspeed);

export const goblin2 = new moveable(Goblins_x[1], Goblins_y[1], goblinspeed);

export const goblin3 = new moveable(Goblins_x[2], Goblins_y[2], goblinspeed);

export const goblin4 = new moveable(Goblins_x[3], Goblins_y[3], goblinspeed);


  ///////////////////////
 ///GARBAGE ENDS HERE///
///////////////////////

// up to here is just setting values


// the background width is 5000, this is so the player
// is in the center of the map


var panic_ = false;

function run() {
  if (!panic_) {
 Playertick();
 Maptick();
  }
    setTimeout(run, 10); // this controls how fast
                         // the program can run
  // if setTimeout is blocked at all the program stops
  // and to continue the page must reload
}

run();
// run() starts the infinited loop
function panic() {
  if (panic_) {
    document.querySelector("link[rel*='icon']").href = "Icon.svg";
    document.title = "Survival Game";
    Decoy.style.visibility="hidden";
    panic_ = false
    // turns the page into a google doc, however
    // it is not interactive
  } else {
    document.querySelector("link[rel*='icon']").href = "heheheheha.png";
    document.title = "Google Docs";
    Decoy.style.visibility="visible";
    panic_ = true;
    // this makes the page revert back to normal
  }
  // this can toggle back from doc to the game
}

document.addEventListener("keyup", event => {
  if (event.key === "8") {
    panic();
  }
});
