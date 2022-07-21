import { background, goblin, player } from "./script.js"
// moveable is called from script.js in the run function
export function tick() {
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";
  Goblin.style.left = background.x + goblin.x + "px";
  Goblin.style.bottom =  background.y + goblin.y + "px";
  twoardplayer(goblin);
}
function move(xc, yc, moveable) {

    moveable.x += xc;   

    moveable.y += yc;   

  }
function twoardplayer(moveable) {
  console.log(player.x - background.x, player.y - background.y);
    if (moveable.x > player.x - background.x  + 20) {
      if(moveable.y < player.y - background.y - 20) {
        move(moveable.speed * -0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 20) {
        move(moveable.speed * -0.5, moveable.speed * -0.5, moveable);
      } else {
        move(moveable.speed * -1, 0, moveable);
      }
    }

  
    if (moveable.x < player.x - background.x - 20) {
      if(moveable.y < player.y - background.y - 20) {
        move(moveable.speed * 0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 20) {
        move(moveable.speed * 0.5, moveable.speed * -0.5, moveable);
      } else {
        move(moveable.speed * 1, 0, moveable);
      }
      
    } else {
    if (moveable.x < player.x - background.x  + 20) {

      if(moveable.y < player.y - background.y - 20) {
        move(moveable.speed * 0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 20) {
        move(moveable.speed * 0.5, moveable.speed * -0.5, moveable);
      }
    }
  }
}