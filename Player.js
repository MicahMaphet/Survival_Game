var x_limit = [window.innerWidth / 5, window.innerWidth - 50 - window.innerWidth / 5]; 
// these limit how far off the screen the character 
// can go, it accounts for the available screen size
var y_limit = [window.innerHeight / 4, window.innerHeight - window.innerHeight / 3];

import { player, background, goblin, hurtbox } from "./script.js";

var past_x;
var past_y;
var ArrowRight = false;
var ArrowLeft = false;
var ArrowDown = false;
var ArrowUp = false;
var space = false;
var ImageBufferX = -206;
var ImageBufferY = -150;
var IMG = "Player.svg";
/*the ImageBuffer variables stop the player images from
changing the viewed position of the character without
other files perceiving the position of the player
as changed */

var Player_ = new Image();
Player_.src = 'Player.svg';
Player_.id="Playerimg";
Player_.style.position = "fixed";
Player_.style.zIndex = 10;
document.body.appendChild(Player_);


var tracktick = "begin"; // if its begin, then it is 
// the first tick loop

// this is called from script.js in the run function


export function tick() {

  if(tracktick == "begin") {
    past_x = player.x;
    past_y = player.y;

    tracktick = 0;
  }
  if (player.corner1[0] - background.x > goblin[0].corner1[0]&&
     player.corner1[0] - background.x < goblin[0].corner2[0]&&
     player.corner1[1] - background.y > goblin[0].corner1[1]) {
    
document.getElementById("positions").innerHTML = 
"\n" + player.corner1[0] - background.x + " " + goblin[0].corner1[0] + "!!!";
  } else {
document.getElementById("positions").innerHTML = "\n" + player.corner1[0] - background.x + " " + goblin[0].corner1[0] + "|||";
  }
  // goblin[0].x < player.x - background.x + player.hurt_width

  renderIMG(IMG);

  ReadInputs();
  DetermineCorners();
  Playerimg.style.left = player.x + ImageBufferX + "px";
  Playerimg.style.bottom = player.y + ImageBufferY + "px";
  hurtbox.style.left = player.x + "px";
  hurtbox.style.bottom = player.y  + "px";
  
  tracktick++; // this goes at the end of tick
}
function ReadInputs() {
  if (ArrowRight === true) {
    if(space) {
      IMG = "Player right slap1.svg";
    } else {
      move(player.speed, 0);
      if (IMG === "Player right slap1.svg") {
        IMG = "Player.svg";
      }
    }
  }
  if (ArrowLeft === true) {
    if(space) {
      IMG = "Player left slap1.svg";
    } else {
      move(player.speed * -1, 0);
  // I don't want the player to move if he is attacking
    if (IMG === "Player left slap1.svg") {
        IMG = "Player.svg";
      }
    }
  }
  if (ArrowDown === true) {
  move(0, player.speed * -1);

  }
  if (ArrowUp === true) {
  move(0, player.speed);
    
  }

    if(!space) {
      IMG = 'Player.svg';   
    }
// the value of player.speed is in the script.js file, as well
// as the initial position, this applies to most things in the 
// game such as the map

}

function DetermineCorners() {
  player.corner1 = [player.x + 15, player.y];
  player.corner2 = [player.x + player.hurt_width + 15, player.y];
  player.corner3 = [player.x + 15, player.y + player.hurt_height];
  player.corner4 = [player.x + player.hurt_width + 15, player.y + player.hurt_width];
}

//Player is only for the css, player is the numbers
function move(xc, yc) {

  if (player.x > x_limit[0]&&
      player.x < x_limit[1]) {
        player.x += xc;   
      }

  if (player.y > y_limit[0]&&
      player.y < y_limit[1]) {
      player.y += yc;   
      }
    
  if (player.y > y_limit[0]&&
      player.y < y_limit[1]) {
        past_y = player.y;
      } else {
        background.y -= yc;
        player.y = past_y;
      }
    
  if (player.x > x_limit[0]&&
      player.x < x_limit[1]) {
        past_x = player.x;
      } else {
        background.x -= xc;
        player.x = past_x;

      }
    
  past_x = player.x;
  past_y = player.y;
  }
var remspd;
document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
    ArrowRight = true;
  }  
  if (event.key === "ArrowLeft") {
    ArrowLeft = true;
  }
  if (event.key === "ArrowDown") {
    ArrowDown = true;
  }  
  if (event.key === "ArrowUp") {
    ArrowUp = true;
  }
  if (event.code === "Space") {
    space = true;
  }
  if (event.shiftKey) {
    if (player.speed < 50) {
      remspd = player.speed;
    }
    player.speed = 50;
  }
});

document.addEventListener("keyup", event => {
  if (event.key === "ArrowRight") {
    ArrowRight = false;
  }  
  if (event.key === "ArrowLeft") {
    ArrowLeft = false;
  }
  if (event.key === "ArrowDown") {
    ArrowDown = false;
  }  
  if (event.key === "ArrowUp") {
    ArrowUp = false;
  }
  if (event.code === "Space") {
    space = false;
  }
  if (event.shiftKey) {

    player.speed = remspd;
  }
});
function renderIMG(IMG_ = "Player.svg") {
      Playerimg.src = IMG_;
/* having this script in a function stops this file 
from getting out of sync with the image */  
}