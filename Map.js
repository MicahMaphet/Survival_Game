import { background, player, Goblins_x, Goblins_y, goblin, player_hitbox, fireball } from "./script.js"
import { Ccollision } from "./Player.js";
import { fireDir } from "./Objects.js";

// moveable is called from script.js in the run function
var tick_ = 0;
var GoblinImg = new Array();
var GoblinImgHitbox = new Array();

export function tick() {
  // This function is called continuesly in the script.js file
  if (tick_ < 1) {
    drawgoblins();
    // console.log("at tick", GoblinImg);
  } else {
    RenderGoblins();
  }
  
  Background.style.left = background.x + "px";
  Background.style.bottom = background.y + "px";
  Background.style.zIndex = -1000 - Math.abs(background.y);
  
  MovementActions();
  DetermineCorners();
  RenderGoblins();

  tick_++;
  // There shouldn't be any code here
}

function MovementActions() {
  /* this loops through all the goblins and moves them closer
  to the player and acts apon collsion, it is scalable. 
  commenting the twoardplayer() function will stop the 
  goblins from moving, but they will still move with the screen.
  When editing this code know that goblin[i] will refer
  to all goblins, their should be a condition for every
  action, under most circumstances all the goblins will
  be doing the same thing */
  for (var i = 0; i < goblin.length; i++) {
    if (goblin[i].state != "inactive") {

    if(tick_ > goblin[i].spawndelay) {
    if (goblin[i].health <= 0) {
      goblin[i].state = "inactive";
    }
    
    for(var j=0;j<goblin.length;j++) {
      if(goblin[i] != goblin[j]) {
        for (var k = 0; k < 5; k++) {
        if(Ccollision(goblin[i],goblin[j])&&
           goblin[j].state != "inactive") {
        bounce(goblin[i], 1, 5);      
        bounce(goblin[j], -1, 5);  
        } else {
          k = 5;
        }
      }
    } else {
      j = goblin.length;
    }
  }
    
    twoardplayer(goblin[i]);
    if(Ccollision(player, goblin[i])) {
      player.health -= 1;
      bounce(goblin[i], 20);      
    }
  }
    
      if(Ccollision(player_hitbox[0], goblin[i])) {
        if (player.state === "left slap") {
          goblin[i].x -= goblin[i].speed * 100;
          goblin[i].health -= 10;
        }
      }
      
      if(Ccollision(player_hitbox[1], goblin[i])) {
        if (player.state === "right slap") {
          goblin[i].x += goblin[i].speed * 100;
          goblin[i].health -= 10;
        }
      }
      if(fireDir === "right") {
        if(Ccollision(fireball, goblin[i])) {
          goblin[i].x += goblin[i].speed * 20;
          goblin[i].health -= 5;
          fireball.health -= 5;
        }
      } else {
      if(Ccollision(fireball, goblin[i])) {
        goblin[i].x -= goblin[i].speed * 20;
        goblin[i].health -= 5;
        fireball.health -= 2;
      }
    }
  }
  }
}

function bounce(moveable, bounce, spread = 0) {
  if(moveable.state === "right") {
    moveable.x -= moveable.speed * bounce;
    moveable.y += Math.random() * -1 * spread + Math.random() * spread;
  }
  if (moveable.state === "left") {
    moveable.x += moveable.speed * bounce;
    moveable.y += Math.random() * spread;
  }
  if(moveable.state === "up") {
    moveable.y -= moveable.speed * bounce;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
  if(moveable.state === "down") {
    moveable.y += moveable.speed * bounce;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
  if(moveable.state === "right up") {
    moveable.x -= moveable.speed * bounce / 2;
    moveable.y -= moveable.speed * bounce / 2;
    moveable.y += Math.random() * -1 * spread + Math.random() * spread;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
  if (moveable.state === "right down") {
    moveable.x -= moveable.speed * bounce / 2;
    moveable.y += moveable.speed * bounce / 2;
    moveable.y += Math.random() * -1 * spread + Math.random() * spread;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
  if(moveable.state === "left up") {
    moveable.x += moveable.speed * bounce / 2 ;
    moveable.y -= moveable.speed * bounce / 2;
    moveable.y += Math.random() * -1 * spread + Math.random() * spread;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
  if(moveable.state === "left down") {
    moveable.x += moveable.speed * bounce / 2;
    moveable.y += moveable.speed * bounce / 2;
    moveable.y += Math.random() * -1 * spread + Math.random() * spread;
    moveable.x += Math.random() * -1 * spread + Math.random() * spread;
  }
}

// Credits to 
// https://stackoverflow.com/questions/19351408/creating-an-array-of-image-objects
var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  document.body.appendChild(img);  
  return img; 
};


export function drawgoblins() {
  for(var i=0;i<goblin.length;i++) {
    GoblinImg[i] = createImage("images/Goblin.svg", "Goblin");
    GoblinImg[i].style.position = "fixed";
    // GoblinImg[i].style.id = "GoblinImg[" + i + "]";
    GoblinImg[i].style.width = "100px";
    GoblinImg[i].style.left = Goblins_y[i] + "px"; 
    GoblinImg[i].style.bottom = Goblins_x[i] + "px";
    GoblinImg[i].style.zIndex = 1;

    GoblinImgHitbox[i] = document.createElement("div");
    GoblinImgHitbox[i].style.position = "fixed";
    GoblinImgHitbox[i].style.backgroundColor = "rgb(200, 0, 0)";
    GoblinImgHitbox[i].style.width = goblin[0].hurt_width + "px";
    GoblinImgHitbox[i].style.height = "60px";
    GoblinImgHitbox[i].style.zIndex = 0;
    GoblinImgHitbox[i].id="hurtbox" + i;
    GoblinImgHitbox[i].style.visibility = "hidden";
    document.body.appendChild(GoblinImgHitbox[i]);
    

    // GoblinImgHitbox[i] = createImage("images/Goblin.svg", "Goblin");
    // GoblinImgHitbox[i].style.position = "fixed";
    // GoblinImgHitbox[i].style.backgroundColor = "rgb(200, 0, 0)";
    // GoblinImgHitbox[i].style.width = goblin[0].hurt_width + "px";
    // GoblinImgHitbox[i].style.height = "60px";
    // GoblinImgHitbox[i].style.zIndex = 0;
    // GoblinImgHitbox[i].style.visibility = "hidden";
  }


  // for(var i=0;i<goblin.length;i++) {
    // var goblin_image = new Image();
    // goblin_image.src = "images/Goblin.svg";
    // goblin_image.id="Goblin" + i;
    // goblin_image.style.position = "fixed";
    // goblin_image.style.width = "100px";
    // goblin_image.style.left = Goblins_y[i] + "px"; 
    // goblin_image.style.bottom = Goblins_x[i] + "px";
    // goblin_image.style.zIndex = 1;
    // document.body.appendChild(goblin_image);  
  
    // var hurtbox = document.createElement("div");
    // hurtbox.style.position = "fixed";
    // hurtbox.style.backgroundColor = "rgb(200, 0, 0)";
    // hurtbox.style.width = goblin[0].hurt_width + "px";
    // hurtbox.style.height = "60px";
    // hurtbox.style.zIndex = 0;
    // hurtbox.id="hurtbox" + i;
    // hurtbox.style.visibility = "hidden";
    // document.body.appendChild(hurtbox);
  // }
/* This creates all the goblin images, it only draws them 
one time the RenderGoblins() function places them as the 
program advances. The images are just a bunch of variables,
not an array */
}

function move(xc, yc, moveable) { 
  if(moveable.state != "inactive") {
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

function RenderGoblins() {
  for(var i=0;i<goblin.length;i++) {
    GoblinImg[i].style.left = goblin[i].x + background.x + "px";
    GoblinImg[i].style.bottom = goblin[i].y + background.y + "px";
    GoblinImg[i].style.zIndex= 1000 - goblin[i].y;

    document.getElementById("Playerimg").style.zIndex= 1000 - player.y / 5;
0  
    // document.getElementById("GoblinImg[" + i + "]").style.left=goblin[i].x + background.x + "px";
    // document.getElementById("GoblinImg[" + i + "]").style.bottom=goblin[i].y + background.y + "px";
    // document.getElementById("GoblinImg[" + i + "]").style.zIndex= 1000 - goblin[i].y;
    // document.getElementById("Playerimg").style.zIndex= 1000 - player.y / 5;
  
    // document.getElementById("GoblinImgHitbox[" + i + "]").style.left=goblin[i].x + 15 + background.x + "px";
    // document.getElementById("GoblinImgHitbox[" + i + "]").style.bottom=goblin[i].y + background.y + "px";
  }
  
/* This places all the goblin images everything else is just a lot
of math determining where to place the images, it is scaleable,
this code does not care how many goblins their are, it will place
all of them */
}
function DetermineCorners() {
  for(var i=0; i<goblin.length;i++) {
    goblin[i].corner1 = [goblin[i].x + 15, goblin[i].y];
    goblin[i].corner2 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y];
    goblin[i].corner3 = [goblin[i].x + 15, goblin[i].y + goblin[i].hurt_height];
    goblin[i].corner4 = [goblin[i].x + goblin[i].hurt_width + 15, goblin[i].y + goblin[i].hurt_width];
  }
  background.corner1 = [2180, 1775];
  background.corner2 = [4750, 1775];
  background.corner3 = [2180, 3325];
  background.corner4 = [4750, 3325];
}