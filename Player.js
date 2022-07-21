var x_limit = [window.innerWidth / 5, window.innerWidth - 50 - window.innerWidth / 5]; 
// these limit how far off the screen the character 
// can go, it accounts for the available screen size
var y_limit = [window.innerHeight / 5, window.innerHeight - window.innerHeight / 5];

import { player, background, goblin, goblin2 } from "./script.js";
var tracktick = "begin"; // this variable keeps the 
                         // key inputs in sync
var past_x;
var past_y;

// this is called from script.js in the run function
export function tick() {
  if(tracktick = "begin") {
    past_x = player.x;
    past_y = player.y;
  }
  Player.style.left = player.x + "px";
  Player.style.bottom = player.y + "px";
  console.log("x= "+ player.x + " y= " + player.y);
  console.log("x= "+ goblin.x + " y= " + goblin.y);
  tracktick = true;
}
//Player is only for the css, player is the numbers



function move(xc, yc) {
  if(tracktick) {


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
    tracktick = false;
    }
  }

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
  move(player.speed, 0);
  }  
  if (event.key === "ArrowLeft") {
  move(player.speed * -1, 0);
  }
  if (event.key === "ArrowDown") {
  move(0, player.speed * -1);
  }  
  if (event.key === "ArrowUp") {
  move(0, player.speed);
  }

});
