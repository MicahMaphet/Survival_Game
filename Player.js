var x_limit = [window.innerWidth / 5, window.innerWidth - 50 - window.innerWidth / 5]; 
// these limit how far off the screen the character 
// can go, it accounts for the available screen size
var y_limit = [window.innerHeight / 4, window.innerHeight - window.innerHeight / 3];

import { player, background, goblin, hurtbox, player_hitbox } from "./script.js";

var past_x;
var past_y;
var SlapFrames = 10;
var slapframe = SlapFrames;
var slap = false;
var ArrowRight = false;
var ArrowLeft = false;
var ArrowDown = false;
var ArrowUp = false;
var space = false;
var ImageBufferX = -206;
var ImageBufferY = -150;
var IMG = "images/PlayerImages/Player.svg";
/*the ImageBuffer variables stop the player images from
changing the viewed position of the character without
other files perceiving the position of the player
as changed */

var Player_ = new Image();
Player_.src = 'images/PlayerImages/Player.svg';
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

document.getElementById("positions").innerHTML = player.health;
  
  // goblin[0].x < player.x - background.x + player.hurt_width

  renderIMG(IMG);

  ReadInputs();
  DetermineCorners();
  Playerimg.style.left = player.x + ImageBufferX + "px";
  Playerimg.style.bottom = player.y + ImageBufferY + "px";
  hurtbox.style.left = player.x + "px";
  hurtbox.style.bottom = player.y  + "px";

  collide();
  
  tracktick++; // this goes at the end of tick
}
var oxygen = 500;
function collide() {
  if (Ccollision(player, background)) {
    player.speed = player.maxspeed;
    oxygen = 200;
  } else {
    oxygen--;
    if(oxygen < 0) {
      player.health -= 1;
      oxygen = 10;
    }
    if (player.health > 50) {
    player.speed = player.maxspeed / 2;
    } else if(player.health > 10) {
    player.speed = player.maxspeed / 5;
    } else {
      player.speed = player.maxspeed / 100;
    }
  }
}

export function Ccollision(moveable1, moveable2) {
  if(Ccheck(moveable1.corner1, moveable2)||
     Ccheck(moveable1.corner2, moveable2)||
     Ccheck(moveable1.corner3, moveable2)||
     Ccheck(moveable1.corner4, moveable2)) {

    return true;
  }
  if(Ccheck(moveable2.corner1, moveable1)||
     Ccheck(moveable2.corner2, moveable1)||
     Ccheck(moveable2.corner3, moveable1)||
     Ccheck(moveable2.corner4, moveable1)) {
    return true;
  }
  return false;
}


function Ccheck(corner, moveable_) {
  if (corner[0] >= moveable_.corner1[0]&&
      corner[0] <= moveable_.corner2[0]&&
      corner[1] >= moveable_.corner1[1]&&
      corner[1] <= moveable_.corner3[1]) {
  return true;
  }
  return false;
}

function ReadInputs() {
  if (ArrowRight) {
    if(slap) {
      if(slapframe < 1) {
        IMG = "images/PlayerImages/Player right slap1.svg";
      }      player.state = "right slap";
        slapframe++;
        if(slapframe >= SlapFrames) {
          slap = false;
          slapframe = 0;
        }
    } else {
      move(player.speed, 0);
      if (IMG >= "images/PlayerImages/Player right slap1.svg") {
        IMG = "images/PlayerImages/Player.svg";
      }
      player.state = "right";
    }
  }
  if(ArrowLeft) {
    if(slap) {
      if(slapframe < 1) {
        IMG = "images/PlayerImages/Player left slap1.svg";
      }
      player.state = "left slap";
        slapframe++;
        if(slapframe >= SlapFrames) {
          slap = false;
          slapframe = 0;
        }
    } else {
      move(player.speed * -1, 0);
      // I don't want the player to move if he is attacking
      if(IMG === "images/PlayerImages/Player left slap1.svg") {
        IMG = "images/PlayerImages/Player.svg";
      }
      player.state = "left";
    }
  }
  
  if (ArrowDown) {
    move(0, player.speed * -1);
  }
  if (ArrowUp) {
    move(0, player.speed);
  }

// the value of player.speed is in the script.js file, as well
// as the initial position, this applies to most things in the 
// game such as the map

}

function DetermineCorners() {
  player.corner1 = [player.x + 15 - background.x, player.y - background.y];
  player.corner2 = [player.x + player.hurt_width + 15 - background.x, player.y - background.y];
  player.corner3 = [player.x + 15 - background.x, player.y + player.hurt_height - background.y];
  player.corner4 = [player.x + player.hurt_width + 15 - background.x, player.y + player.hurt_hieght - background.y];

/////////////////
///LEFT HITBOX///
/////////////////
  
player_hitbox[0].x = player.corner1[0] - 50;
player_hitbox[0].y = player.corner1[1] + 30;
  
player_hitbox[0].corner1 = [player_hitbox[0].x, player_hitbox[0].y];

player_hitbox[0].corner2 = [player_hitbox[0].x + player_hitbox[0].hurt_width, player_hitbox[0].y];

player_hitbox[0].corner3 = [player_hitbox[0].x, player_hitbox[0].y + player_hitbox[0].hurt_height];

player_hitbox[0].corner4 = [player_hitbox[0].x + player_hitbox[0].hurt_width, player_hitbox[0].y + player_hitbox[0].hurt_width];

//////////////////
///RIGHT HITBOX///
//////////////////
  
player_hitbox[1].x = player.corner1[0] + 60;
player_hitbox[1].y = player.corner1[1] + 30;
  
player_hitbox[1].corner1 = [player_hitbox[1].x, player_hitbox[1].y];

player_hitbox[1].corner2 = [player_hitbox[1].x + player_hitbox[1].hurt_width, player_hitbox[1].y];

player_hitbox[1].corner3 = [player_hitbox[1].x, player_hitbox[1].y + player_hitbox[1].hurt_height];

player_hitbox[1].corner4 = [player_hitbox[1].x + player_hitbox[1].hurt_width, player_hitbox[1].y + player_hitbox[1].hurt_width];
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
document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" ||
      event.key === "d") {
    ArrowRight = true;
  }  
  if (event.key === "ArrowLeft" ||
      event.key === "a") {
    ArrowLeft = true;
  }
  if (event.key === "ArrowDown" ||
      event.key === "s") {
    ArrowDown = true;
  }  
  if (event.key === "ArrowUp" ||
      event.key === "w") {
    ArrowUp = true;
  }
  if (event.code === "Space") {
    if(!space) {
    slap = true;
    }
    space = true;
  }
});

document.addEventListener("keyup", event => {
  if (event.key === "ArrowRight" ||
      event.key === "d") {
    ArrowRight = false;
  }  
  if (event.key === "ArrowLeft" ||
      event.key === "a") {
    ArrowLeft = false;
  }
  if (event.key === "ArrowDown" ||
      event.key === "s") {
    ArrowDown = false;
  }  
  if (event.key === "ArrowUp" ||
      event.key === "w") {
    ArrowUp = false;
  }
  if (event.code === "Space") {
    space = false;
  }
});
function renderIMG(IMG_ = "images/PlayerImages/Player.svg") {
      Playerimg.src = IMG_;
/* having this script in a function stops this file 
from getting out of sync with the image */  
}
