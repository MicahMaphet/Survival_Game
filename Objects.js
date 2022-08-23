import { player, fireball, background } from "./script.js";

var FireBall = new Image();
FireBall.src = 'images/FireBall.png';
FireBall.id="FireBall";
FireBall.style.position = "fixed";
FireBall.style.zIndex = 10;
document.body.appendChild(FireBall);

let space = false;
export let fireDir = "none";

export function tick() {
  FireBall.style.left = fireball.x + background.x + "px";
  FireBall.style.bottom = fireball.y  + background.y + "px";
  FireBall.style.width = "100px";
  
  if(space &&
     fireDir === "none") {
    if(player.state === "right"||
       player.state === "right slap") {
      fireDir = "right";
      fireball.x = player.x - background.x + 50;
      fireball.y = player.y - background.y;
      fireball.health = fireball.maxhealth;
    } else if(player.state === "left"||
              player.state === "left slap") {
      fireDir = "left";
      fireball.x = player.x - background.x - 50;
      fireball.y = player.y - background.y;
      fireball.health = fireball.maxhealth;
    }
  }
  console.log(fireDir, player.state);

  if(fireDir === "right"&&
     fireball.health > 0) {
    fireball.x += 10;
    fireball.health--;
  } else if(fireDir === "left"&&
            fireball.health > 0) {
    fireball.x -= 10;
    fireball.health--;
  } else if(fireball.health <= 0) {
    fireDir = "none";
    fireball.health = 0;
    fireball.x = -500 - background.x;
    fireball.y = -500 - background.y;
  }
  DetermineCorners();  
}

export function DetermineCorners() {
  fireball.corner1 = [fireball.x + 15, fireball.y];
  fireball.corner2 = [fireball.x + fireball.hurt_width + 15, fireball.y];
  fireball.corner3 = [fireball.x + 15, fireball.y + fireball.hurt_height];
  fireball.corner4 = [fireball.x + fireball.hurt_width + 15, fireball.y + fireball.hurt_width];
}

document.addEventListener("keyup", event => {
  if (event.code === "Space") {
    space = false;
  }
});

document.addEventListener("keydown", event => {
  if (event.code === "Space") {
    space = true;
  }
});