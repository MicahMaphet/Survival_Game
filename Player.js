import { player, background } from "./script.js";

// this is called from script.js in the run function
export function tick() {
  Player.style.left = player.x + "px";
  Player.style.bottom = player.y + "px";
  console.log("x= "+ background.x + "y= " + background.y);
}
//Player is only for the css, player is the numbers
function move(xc, yc) {
    background.x -= xc;
    background.y -= yc;  
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
