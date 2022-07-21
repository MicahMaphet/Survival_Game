import { background, moveable, player, goblin, goblin2 } from "./script.js"
// moveable is called from script.js in the run function

export const Goblins_x = [2500, 3000];
export const Goblins_y = [2500, 2500];

var tick_ = 0;
export function tick() {
  if (tick_ < 1) {
  drawgoblins();
    
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";

  // twoardplayer(goblin);
  // twoardplayer(goblin2);
  RenderGoblins();
  tick_++;
}

function RenderGoblins() {
  for(var gobi = 1; gobi < Goblins_x.length + 2; gobi++) {
  PlaceGoblin(Goblin1);
  }
}
function PlaceGoblin(place_goblin) {
  console.log("place goblin");
  Goblin1.style.left = background.x + goblin.x + "px";
  Goblin1.style.bottom =  background.y + goblin.y + "px";
  console.log(background.y + goblin.y);
  Goblin1.style.left = 100000 + "px";
}
function drawgoblins() {
  for (var goblin_index = 1; goblin_index < Goblins_x.length + 1; goblin_index++) {
  var _goblin = document.createElement("div");
  _goblin.setAttribute("class", "Goblin");
  _goblin.setAttribute("id", "Goblin"+ goblin_index);
  document.body.appendChild(_goblin);
  _goblin.style.left = Goblins_x[goblin_index - 1] + background.x;
    console.log(Goblins_x[goblin_index - 1] + "!@#$");
  _goblin.style.bottom = Goblins_y[goblin_index - 1] + background.y;  
    console.log(Goblins_y[goblin_index - 1] + "!@#$");

}

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