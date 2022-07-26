import {tick as Playertick} from "./Player.js";
import {tick as Maptick } from "./Map.js";
import {tick as Statstick} from "./stats.js";
import {tick as Menutick, GameState} from "./menu.js";
import {tick as Objectstick, DetermineCorners} from "./Objects.js";

export class moveable {
  constructor(x = 0, y = 0, speed = 0, hurt_width = 50, hurt_height = 50, health = 20, state = "idle") {
    this.x = x;
    this.y = y;
    this.hurt_width = hurt_width;
    this.hurt_height = hurt_height;
    this.speed = speed;
    this.health = health;
    this.maxhealth = health;
    this.state = state;
    this.maxspeed = speed;
    this.corner1;
    this.corner2;
    this.corner3;
    this.corner4;
    this.IMG;
  }
}
export class Goblin extends moveable {
  constructor() {
    super();
    this.hurt_height = 50;
    this.hurt_width = 70;
    this.corner1 = [this.x + 15, this.y];
    this.corner2 = [this.x + this.hurt_width + 15, this.y];
    this.corner3 = [this.x + 15, this.y + this.hurt_height];
    this.corner4 = [this.x + this.hurt_width + 15, this.y + this.hurt_width];
    this.spawndelay = 0;
    this.speed = 3;
  }
}
export const player = new moveable(window.innerWidth / 2, window.innerHeight / 2, 6, 70, 50, 100);

player.corner1 = [player.x + 15, player.y];
player.corner2 = [player.x + player.hurt_width + 15, player.y];
player.corner3 = [player.x + 15, player.y + player.hurt_height];
player.corner4 = [player.x + player.hurt_width + 15, player.y + player.hurt_width];

export var player_hitbox = new Array(2);

player_hitbox[0] = new moveable(window.innerWidth / 2, window.innerHeight / 2, 3, 50, 140);

player_hitbox[1] = new moveable(window.innerWidth / 2, window.innerHeight / 2, 3, 50, 140);

export var hurtbox = document.createElement("div");
hurtbox.style.position = "fixed";
hurtbox.style.backgroundColor = "rgb(256, 0, 0)";
hurtbox.style.width = player.hurt_width + "px";
hurtbox.style.height = player.hurt_height + "px";
hurtbox.style.zIndex = 1;
hurtbox.style.visibility = "hidden";
document.body.appendChild(hurtbox);

// export var Goblins_x = [2000, 1000, 4000, 4500, 2500, 1000, 1000, 1000, 1000, 5000, 5000, 5000, 1000, 1100, 1200, 1300, 1400, 1500, 2000, 2100, 2200, 2300, 2400, 5000, 5000, 5000, 4000, 4500, 1000, 2000, 3000, 4000, -500,   0,    500,  1000, 1500,  2000, 2500, 3500, 4000, 4500, 5000, 5500];              
// export var Goblins_y = [2000, 1500, 3000, 3500, 2500, 1000, 1100, 1500, 2000, 1000, 1100, 1500, 3000, 3000, 4000, 5000, 3000, 1000, 2000, 500,  5000, 3500, 500,  3000, 4000, 5000, 1000, 3000, 500,  500,  1000, 1000, -1000, -500, -1500, 500,  -500, -1000, 0,    -500, 1000, 1500, -500, 500];         

export const fireball = new moveable(0, 0, 5, 50, 50, 100);
DetermineCorners();


export var Goblins_x = [];
export var Goblins_y = []; 
let quadrant = 0;
for(let i=0;i<500;i++){
      // Goblins_x[i] = Math.random() * 3000 - 1000;
      // Goblins_y[i] = Math.random() * 6000 - 1000;
  switch(quadrant) {
    case 0:
      Goblins_x[i] = Math.random() * 3000 - 1000;
      Goblins_y[i] = Math.random() * 6000 - 1000;
      quadrant++;
      break;
    case 1:
      Goblins_x[i] = Math.random() * 7000 - 1000;
      Goblins_y[i] = Math.random() * 2000 + 4000;
      quadrant++;
      break;
    case 2:
      Goblins_x[i] = Math.random() * 7000 - 1000;
      Goblins_y[i] = Math.random() * 2500 - 1000;
      quadrant++;
      break;
    case 3:
      Goblins_x[i] = Math.random() * 3000 + 3000;
      Goblins_y[i] = Math.random() * 1500 - 2000;
      quadrant = 0;
      break;
  }
}

/* all you need to do to add more goblins is to add to 
these arrays, they must be the same length */
export var goblin = new Array();
for(var i = 0; i < Goblins_x.length; i++) {
  goblin[i] = new moveable(Goblins_x[i], Goblins_y[i], 3, 70, 50);
// this is declaring the corners of collision for the goblins
  goblin[i].corner1 = [goblin[i].x + 15, goblin[i].y];
  goblin[i].corner2 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y];
  goblin[i].corner3 = [goblin[i].x + 15, goblin[i].y + goblin[i].hurt_height];
  goblin[i].corner4 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y + goblin[i].hurt_width];

  goblin[i].spawndelay = 0;
  if (i < 500) {
    goblin[i].spawndelay = 14000;
  }
  if (i < 375) {
    goblin[i].spawndelay = 12500;
  }
  if (i < 300) {
    goblin[i].spawndelay = 11000;
  }
  if (i < 250) {
    goblin[i].spawndelay = 10000;
  }  
  if (i < 225) {
    goblin[i].spawndelay = 8000;
  }  
  if (i < 200) {
    goblin[i].spawndelay = 7000;
  }
  if (i < 160) {
    goblin[i].spawndelay = 6000;
  }
  if (i < 120) {
    goblin[i].spawndelay = 5000;
  }
  if (i < 100) {
    goblin[i].spawndelay = 4000;
  }
  if (i < 80) {
    goblin[i].spawndelay = 3000;
  }
  if (i < 60) {
    goblin[i].spawndelay = 2000;
  }
  if (i < 50) {
    goblin[i].spawndelay = 1000;
  }
  if (i < 25) {
    goblin[i].spawndelay = 500;
  }
  if(i < 10) {
    goblin[i].spawndelay = 50;
  }
}
goblin[50].weight = 50;
console.log(goblin[50].weight);

/* each index of the goblin array is an object of the 
moveable class, even though this is like a multidimentional 
array, the sytax will never be goblin[i][0]. It will be
goblin[i].x. The goblin[i].x access the Gobins_x array
with the index of the goblin number. It doesn't matter if
the for loop reads the Goblins_x or Goblins_y because
they should be the same length. The value of goblin is
multiple moveable objects, try console.log(goblin)
never reset the value of goblin[i], it will destroy the 
program Having the data of every single goblin in the 
array goblin is very unforgiving*/
export var stoneblock = new Array();
for(var i=0;i<500;i++) {
  stoneblock[i] = new moveable();
  stoneblock[i].x = 2500;
  stoneblock[i].y = 2500;
  stoneblock[i].width = 500;
  stoneblock[i].height = 50;
}

var InitiateCrash = false;

export const background = new moveable(-2500, -2500);
// the background width is 5000, this is so the player
// is in the center of the map
background.corner1 = [background.x + 15, player.y];
background.corner2 = [background.x + player.hurt_width + 15, player.y];
background.corner3 = [background.x + 15, player.y + player.hurt_height];
background.corner4 = [background.x + player.hurt_width + 15, player.y + player.hurt_width];



var panic_ = false;


  ///////////////////////////////////////
 ///up to here is just setting values///
///////////////////////////////////////

function run() {
  if(!panic_) {
    if(GameState === "gaming") {
      Playertick();
      Maptick();
      Statstick();
      Objectstick();
    }
    if(GameState === "menu"||
       GameState === "controls") {
     Menutick();      
    }
  }
if(InitiateCrash) {
  setTimeout(function(){
    while(1)location.reload(1);
  }, 1000);
  // this crashes your browser
  // it works best on chrome
}
    setTimeout(run, 20); // this controls how fast
                         // the program can run
  // if setTimeout is blocked at all the program stops
  // and to continue the page must reload
}

run();
// run() starts the infinited loop
function panic() {
  if (panic_) {
    document.querySelector("link[rel*='icon']").href = "images/Icon.svg";
    document.title = "Survival Game";
    Decoy.style.visibility="hidden";
    panic_ = false
    // turns the page into a google doc, however
    // it is not interactive
  } else {
    document.querySelector("link[rel*='icon']").href = "images/heheheheha.png";
    document.title = "Untitled document - Google Docs";
    Decoy.style.visibility="visible";
    panic_ = true;
    // this makes the page revert back to normal
  }
  // this can toggle back from doc to the game
}

document.addEventListener("keyup", event => {
  if(event.key === "7") {
    window.location = "https://docs.google.com/";
  }
  if(event.key === "8") {
    panic();
  }
  if(event.key === "9") {
    InitiateCrash = true;
  }
  if(event.key === "0") {
    window.open("https://free-minecraft.micahmaphet.repl.co/", "_blank");
  }
});
