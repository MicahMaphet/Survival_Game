import { player, background } from "./script.js";
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
  tracktick = true;
}
//Player is only for the css, player is the numbers


function move(xc, yc) {
console.log("keylistener run",tracktick);
  if(tracktick) {
    console.log("tick allow",tracktick);


  if (player.x > 50&&
      player.x < 600) {
        console.log(past_x);
        player.x += xc;   
      }

  if (player.y > 50&&
      player.y < 400) {
      player.y += yc;   
      }
    
  if (player.y > 50&&
      player.y < 400) {
        past_y = player.y;
      } else {
        background.y -= yc;
        player.y = past_y;
      }
    
  if (player.x > 50&&
      player.x < 600) {
        past_x = player.x;
      } else {
        background.x -= xc;
        player.x = past_x;

      }
    console.log(player.x);
    
  past_x = player.x;
  past_y = player.y;
    tracktick = false;
    }
  }

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
  move(20, 0);
  }  
  if (event.key === "ArrowLeft") {
  move(-20, 0);
  }
  if (event.key === "ArrowDown") {
  move(0, -20);
  }  
  if (event.key === "ArrowUp") {
  move(0, 20);
  }

});
