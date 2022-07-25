var x_limit = [window.innerWidth / 5, window.innerWidth - 50 - window.innerWidth / 5]; 
// these limit how far off the screen the character 
// can go, it accounts for the available screen size
var y_limit = [window.innerHeight / 5, window.innerHeight - window.innerHeight / 5];

import { player, background } from "./script.js";
var tracktick = "begin"; // if its begin, then it is the first tick loop
var past_x;
var past_y;
var ArrowRight = false;
var ArrowLeft = false;
var ArrowDown = false;
var ArrowUp = false;

// this is called from script.js in the run function
export function tick() {
  if(tracktick = "begin") {
    past_x = player.x;
    past_y = player.y;
  }
  ReadInputs();
  Player.style.left = player.x + "px";
  Player.style.bottom = player.y + "px";
  // console.log("x= "+ player.x + " y= " + player.y);
  tracktick = true; // this goes at the end of tick
}
function ReadInputs() {
  console.log(ArrowRight);
  if (ArrowRight === true) {
  move(player.speed, 0);
    
  }
  if (ArrowLeft === true) {
  move(player.speed * -1, 0);

  }
  if (ArrowDown === true) {
  move(0, player.speed * -1);
    
  }
  if (ArrowUp === true) {
  move(0, player.speed);
    
  }
// the value of player.speed is in the script.js file, as well
// as the initial position, this applies to most things in the 
// game such as the map

}
//Player is only for the css, player is the numbers
function move(xc, yc) {

  if (player.x > x_limit[0]&&
      player.x < x_limit[1]) {
        player.x += xc;   
    console.log(player);
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
});
