import { background, player, Goblins_x, Goblins_y, goblin, goblin2, goblin3, goblin4 } from "./script.js"
// moveable is called from script.js in the run function

var tick_ = 0;
export function tick() {
  if (tick_ < 1) {
  drawgoblins();
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";
  
  twoardplayer(goblin);
  twoardplayer(goblin2);
  twoardplayer(goblin3);
  twoardplayer(goblin4);
  
  RenderGoblins();
  tick_++;
}


function drawgoblins() {
for(var i=0; i<5; i++) {
  var goblin_image = new Image();
  goblin_image.src = 'Goblin.svg';
  goblin_image.id="Goblin" + i;
  goblin_image.style.position = "fixed";
  goblin_image.style.width = "100px";
  goblin_image.style.left = Goblins_y[i] + "px"; 
  goblin_image.style.bottom = Goblins_x[i] + "px"; 
  document.body.appendChild(goblin_image);  
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
function RenderGoblins() {
  Goblin1.style.left = goblin.x + background.x + "px";
  Goblin1.style.bottom = goblin.y + background.y + "px";

  Goblin2.style.left = goblin2.x + background.x + "px";
  Goblin2.style.bottom = goblin2.y + background.y + "px";

  Goblin3.style.left = goblin3.x + background.x + "px";
  Goblin3.style.bottom = goblin3.y + background.y + "px";

  Goblin4.style.left = goblin4.x + background.x + "px";
  Goblin4.style.bottom = goblin4.y + background.y + "px";


}