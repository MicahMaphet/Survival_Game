import { background, player, Goblins_x, Goblins_y, goblin, player_hitbox } from "./script.js"
import { Ccollsion } from "./Player.js";

// moveable is called from script.js in the run function
var tick_ = 0;
export function tick() {
  if (tick_ < 1) {
  drawgoblins();
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";

  for (var i = 0; i < goblin.length; i++) {
   twoardplayer(goblin[i]);
    if(Ccollsion(player_hitbox[0], goblin[i])) {
      if (player.state === "left slap") {
        goblin[i].x -= goblin[i].speed * 100;
      }
    }
    if(Ccollsion(player_hitbox[1], goblin[i])) {
      if (player.state === "right slap") {
        goblin[i].x += goblin[i].speed * 100;
      }
    }
    if(Ccollsion(player, goblin[i])) {
        player.health -= 1;
      if (goblin[i].state === "right") {
        goblin[i].x -= goblin[i].speed * 20      
      }
      if (goblin[i].state === "left") {
        goblin[i].x += goblin[i].speed * 20;
      }
      if (goblin[i].state === "up") {
        goblin[i].x -= goblin[i].speed * 20;
      }
      if (goblin[i].state === "down") {
        goblin[i].y += goblin[i].speed * 20;
      }
      if (goblin[i].state === "right up") {
        goblin[i].x -= goblin[i].speed * 10;
        goblin[i].y -= goblin[i].speed * 10;
      }
      if (goblin[i].state === "right down") {
        goblin[i].x -= goblin[i].speed * 10;
        goblin[i].y += goblin[i].speed * 10;
      }
      if (goblin[i].state === "left up") {
        goblin[i].x += goblin[i].speed * 10;
        goblin[i].y -= goblin[i].speed * 10;
      }
      if (goblin[i].state === "left down") {
        goblin[i].x += goblin[i].speed * 10;
        goblin[i].y += goblin[i].speed * 10;
      }      
    }
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
hurtbox.style.visibility = "hidden";
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
  if(yc === moveable.speed) {
    moveable.state = "up";
  }
  if(yc === moveable.speed * -1) {
    moveable.state = "down";
  }
  if(xc === moveable.speed) {
    moveable.state = "right";
  }
  if(xc === moveable.speed * -1) {
    moveable.state = "left";
  }
  if(yc === moveable.speed * 0.5&&
     xc === moveable.speed * 0.5) {
    moveable.state = "right up";
  }
  if(yc === moveable.speed * -0.5&&
     xc === moveable.speed * 0.5) {
    moveable.state = "right down";
  }
  if(yc === moveable.speed * 0.5&&
     xc === moveable.speed * -0.5) {
    moveable.state = "left up";
  }
  if(yc === moveable.speed * -0.5&&
     xc === moveable.speed * -0.5) {
    moveable.state = "left down";
  }

  }
function twoardplayer(moveable) {
    if (moveable.x > player.x - background.x  + 10) {
      if(moveable.y < player.y - background.y - 10) {
        move(moveable.speed * -0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 10) {
        move(moveable.speed * -0.5, moveable.speed * -0.5, moveable);
      } else {
        move(moveable.speed * -1, 0, moveable);
      }
    }

  
    if (moveable.x < player.x - background.x - 10) {
      if(moveable.y < player.y - background.y - 10) {
        move(moveable.speed * 0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 10) {
        move(moveable.speed * 0.5, moveable.speed * -0.5, moveable);
      } else {
        move(moveable.speed * 1, 0, moveable);
      }
      
    } else {
    if (moveable.x < player.x - background.x  + 10) {

      if(moveable.y < player.y - background.y - 10) {
        move(moveable.speed * 0.5, moveable.speed * 0.5, moveable);
      } else if (moveable.y > player.y - background.y + 10) {
        move(moveable.speed * 0.5, moveable.speed * -0.5, moveable);
      }
    }
  }
  if(moveable.x >= player.x - background.x + 10&&
     moveable.x <= player.x - background.x  + 10) {
    if(moveable.y < player.y - background.y - 10) {
      move(0, moveable.speed * 1, moveable);
    }
    if(moveable.y > player.y - background.y + 10) {
      move(0, moveable.speed * -1, moveable);
    }
  }
}
console.log(goblin);
function RenderGoblins() {
  for(var i=0; i<goblin.length;i++) {
    document.getElementById("Goblin" + i).style.left=goblin[i].x + background.x + "px";
    document.getElementById("Goblin" + i).style.bottom=goblin[i].y + background.y + "px";

  goblin[i].corner1 = [goblin[i].x + 15, goblin[i].y];
  goblin[i].corner2 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y];
  goblin[i].corner3 = [goblin[i].x + 15, goblin[i].y + goblin[i].hurt_height];
  goblin[i].corner4 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y + goblin[i].hurt_width];


    document.getElementById("hurtbox" + i).style.left=goblin[i].x + 15 + background.x + "px";
    document.getElementById("hurtbox" + i).style.bottom=goblin[i].y + background.y + "px";
  }
  

  
/* This places all the goblin images everything else is just a lot
of math determining where to place the images, it is scaleable,
this code does not care how many goblins their are, it will place
all of them */
}