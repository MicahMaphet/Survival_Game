import {tick as Playertick} from "./Player.js";
import {tick as Maptick} from "./Map.js";

export class moveable {
  constructor(x = 0, y = 0, speed = 0, hurt_width = 50, hurt_height = 50) {
    this.x = x;
    this.y = y;
    this.hurt_width = hurt_width;
    this.hurt_height = hurt_height;
    this.speed = speed;
    this.corner1;
    this.corner2;
    this.corner3;
    this.corner4;
  }

  
}
export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 3, 70, 50);

player.corner1 = [player.x + 15, player.y];
player.corner2 = [player.x + player.hurt_width + 15, player.y];
player.corner3 = [player.x + 15, player.y + player.hurt_height];
player.corner4 = [player.x + player.hurt_width + 15, player.y + player.hurt_width];

export var hurtbox = document.createElement("div");
hurtbox.style.position = "fixed";
hurtbox.style.backgroundColor = "rgb(256, 0, 0)";
hurtbox.style.width = player.hurt_width + "px";
hurtbox.style.height = player.hurt_height + "px";
hurtbox.style.zIndex = 1;
document.body.appendChild(hurtbox);

export const Goblins_x = [2000, 1000, 4000, 4500, 2500];
export const Goblins_y = [2000, 1500, 3000, 3500, 2500];
/* all you need to do to add more goblins is to add to 
these arrays, they must be the same length */

export var goblin = new Array(Goblins_x);
for(var i = 0; i < Goblins_x.length; i++) {
  goblin[i] = new moveable(Goblins_x[i], Goblins_y[i], 1.5, 70, 50);

// this is declaring the corners of collision for the goblins
  
  goblin[i].corner1 = [goblin[i].x + 15, goblin[i].y];
  goblin[i].corner2 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y];
  goblin[i].corner3 = [goblin[i].x + 15, goblin[i].y + goblin[i].hurt_height];
  goblin[i].corner4 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y + goblin[i].hurt_width];
}
/* each index of the goblin array is an object of the 
moveable class, even though this is like a multidimentional 
array, the sytax will never be goblin[i][0]. It will be
goblin[i].x. The goblin[i].x access the Gobins_x array
with the index of the goblin number. It doesn't matter if
the for loop reads the Goblins_x or Goblins_y because
they should be the same length. The value of goblin is
mulstiple moveable objects, try console.log(goblin)*/



export const background = new moveable(-2500, -2500);
// the background width is 5000, this is so the player
// is in the center of the map

var panic_ = false;


  ///////////////////////////////////////
 ///up to here is just setting values///
///////////////////////////////////////

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
    document.title = "Untitled document - Google Docs";
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
