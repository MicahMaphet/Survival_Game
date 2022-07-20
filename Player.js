import {player} from "./script.js";

export function tick() {
  Player.style.left = player.x + "px";
  Player.style.bottom = player.y + "px";
}

function move(xc, yc) {
    player.x += xc;
    player.y += yc;  
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