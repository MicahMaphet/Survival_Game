import { player } from "./script.js";
var x = 0;
var vol = 0;
var healthbar = new Image();
healthbar.src = 'health bar1.svg';
healthbar.style.position = "fixed";
healthbar.style.zIndex = 1000;
healthbar.style.left = x + "px";
healthbar.style.width = "20%";
document.body.appendChild(healthbar);
var prehealth;
export function tick() {
healthbar.style.left = x + "%";
  vol += 0 - x * 0.1;
  vol = vol * 0.9;
  x += vol;
  if(prehealth != player.health) {
    vol += 2;
    prehealth = player.health;
  }
  if (player.health > 90) {
    if(healthbar.src != 'health bar1.svg') {
      healthbar.src = 'health bar1.svg';
    }
  } else if (player.health > 80) {
    if(healthbar.src != 'health bar2.svg') {
      healthbar.src = 'health bar2.svg';
    }
  } else if (player.health > 70) {
    if(healthbar.src != 'health bar3.svg') {
      healthbar.src = 'health bar3.svg';
    }
    
  } else if (player.health > 60) {
    if(healthbar.src != 'health bar4.svg') {
      healthbar.src = 'health bar4.svg';
    }
    } else if (player.health > 50) {
    if(healthbar.src != 'health bar5.svg') {
      healthbar.src = 'health bar5.svg';
    }
      } else if (player.health > 40) {
    if(healthbar.src != 'health bar6.svg') {
      healthbar.src = 'health bar6.svg';
    }
      } else if (player.health > 30) {
    if(healthbar.src != 'health bar7.svg') {
      healthbar.src = 'health bar7.svg';
    }
      } else if (player.health > 20) {
    if(healthbar.src != 'health bar8.svg') {
      healthbar.src = 'health bar8.svg';
    }
      } else if (player.health > 10) {
    if(healthbar.src != 'health bar9.svg') {
      healthbar.src = 'health bar9.svg';
    }
      } else {
    if(healthbar.src != 'health bar10.svg') {
      healthbar.src = 'health bar10.svg';
    }
  }
}

window.addEventListener("load", event => {
    var isLoaded = healthbar.complete && healthbar.naturalHeight !== 0;
    console.log(isLoaded);
});