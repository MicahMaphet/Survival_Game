import { background, moveable, player, goblin, goblin2 } from "./script.js"
// moveable is called from script.js in the run function

export const Goblins_x = [2500, 3000];
export const Goblins_y = [2500, 2500];
var tick_ = 0;
export function tick() {
  if (tick_ < 1) {
 // drawgoblins();
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";

  // twoardplayer(goblin);
  // twoardplayer(goblin2);
  tick_++;
}


function drawgoblins() {
  // var gobl = document.createElement("div");
  // gobl.setAttribute("class", "Goblin");
  // gobl.setAttribute("id", "Goblin1");
  // document.body.appendChild(gobl);
  // Goblin1.style.zIndex = 100;
  // Goblin1.style.left = "50px";
  // Goblin1.style.bottom = "50px";  


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