import { background, player, Goblins_x, Goblins_y, goblin } from "./script.js"
// moveable is called from script.js in the run function

var tick_ = 0;
export function tick() {
  if (tick_ < 1) {
  drawgoblins();
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";

  for (var i = 0; i < goblin.length; i++) {
   // twoardplayer(goblin[i]);
/* this loops through all the goblins and moves them closer
to the player, it is scalable. commenting the twoardplayer()
funciton will stop the goblins from moving, but they will
still move with the screen*/
  }

  RenderGoblins();
  
  tick_++;
}


function drawgoblins() {
for(var i=0; i<goblin.length; i++) {
  var goblin_image = new Image();
  goblin_image.src = "Goblin.svg";
  goblin_image.id="Goblin" + i;
  goblin_image.style.position = "fixed";
  goblin_image.style.width = "100px";
  goblin_image.style.left = Goblins_y[i] + "px"; 
  goblin_image.style.bottom = Goblins_x[i] + "px";
  goblin_image.style.zIndex = 1;
  document.body.appendChild(goblin_image);  
  
var hurtbox = document.createElement("div");
hurtbox.style.position = "fixed";
hurtbox.style.backgroundColor = "rgb(200, 0, 0)";
hurtbox.style.width = goblin[0].hurt_width + "px";
hurtbox.style.height = "60px";
hurtbox.style.zIndex = 0;
hurtbox.id="hurtbox" + i;
document.body.appendChild(hurtbox);
  
  }
/* This creates all the goblin images, it only draws them 
one time the RenderGoblins() function places them as the 
program advances. The images are just a bunch of variables,
not an array */
}

function move(xc, yc, moveable) { 

    moveable.x += xc;   

    moveable.y += yc;   

  }
function twoardplayer(moveable) {
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
  for(var i=0; i<goblin.length;i++) {
    document.getElementById("Goblin" + i).style.left=goblin[i].x + background.x + "px";
    document.getElementById("Goblin" + i).style.bottom=goblin[i].y + background.y + "px";
  }
  
  for(var i=0; i<goblin.length;i++) {
    document.getElementById("hurtbox" + i).style.left=goblin[i].x + 15 + background.x + "px";
    document.getElementById("hurtbox" + i).style.bottom=goblin[i].y + background.y + "px";
  }
  
/* This places all the goblin images everything else is just a lot
of math determining where to place the images, it is scaleable,
this code does not care how many goblins their are, it will place
all of them */
}