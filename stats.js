import { player } from "./script.js";
var x = 0;
var vol = 0;
var healthbar = new Image();
healthbar.src = 'images/healthbar/health bar1.svg';
healthbar.style.position = "fixed";
healthbar.style.zIndex = 500;
healthbar.style.left = x + "px";
healthbar.style.width = "20%";
document.body.appendChild(healthbar);
var prehealth = 100;

let IMG = healthbar.src;
export function tick() {
healthbar.style.left = x + "%";
    vol += - x * 0.1;
    vol = vol * 0.9;
    x += vol;
    vol += player.health - prehealth;
    prehealth = player.health;
// this code shakes the health bar if the play takes damge
// it works without if statements
  if (player.health > 90) {
    if(IMG != 'images/healthbar/health bar1.svg') {
      IMG = 'images/healthbar/health bar1.svg';
    }
  } else if (player.health > 80) {
    if(IMG != 'images/healthbar/health bar2.svg') {
      IMG = 'images/healthbar/health bar2.svg';
    }
  } else if (player.health > 70) {
    if(IMG != 'images/healthbar/health bar3.svg') {
      IMG = 'images/healthbar/health bar3.svg';
    }
    
  } else if (player.health > 60) {
    if(IMG != 'images/healthbar/health bar4.svg') {
      IMG = 'images/healthbar/health bar4.svg';
    }
    } else if (player.health > 50) {
    if(IMG != 'images/healthbar/health bar5.svg') {
      IMG = 'images/healthbar/health bar5.svg';
    }
      } else if (player.health > 40) {
    if(IMG != 'images/healthbar/health bar6.svg') {
      IMG = 'images/healthbar/health bar6.svg';
    }
      } else if (player.health > 30) {
    if(IMG != 'images/healthbar/health bar7.svg') {
      IMG = 'images/healthbar/health bar7.svg';
    }
      } else if (player.health > 20) {
    if(IMG != 'images/healthbar/health bar8.svg') {
      IMG = 'images/healthbar/health bar8.svg';
    }
      } else if (player.health > 10) {
    if(IMG != 'images/healthbar/health bar9.svg') {
      IMG = 'images/healthbar/health bar9.svg';
    }
      } else {
    if(IMG != 'images/healthbar/health bar10.svg') {
      IMG = 'images/healthbar/health bar10.svg';
    }
  }
  healthbar.onload = function(){
    healthbar.src = IMG;
  };
  healthbar.onload();
}

window.addEventListener("load", event => {
    var isLoaded = healthbar.complete && healthbar.naturalHeight !== 0;
});