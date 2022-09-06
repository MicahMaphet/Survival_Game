class MenuElement {
  constructor(src = "", width = 0, height = 0, left = 0, top = 0, zIndex = 1000, visibility = "visible") {
    this.src = src;
    this.width = width;
    this.height = height;
    this.defaultwidth = width;
    this.left = left;
    this.top = top;
    this.zIndex = zIndex;
    this.def_zIndex = zIndex;
    this.def_left = left;
    this.def_top = top;
    this.visibility = visibility;
    this.corners = false;
    this.IMG;
    /**
      * It's usefull to have vairiables for all the image
      * properties so they can be tested before they are rendered
      * They can also have defaults and are easier to access and loop through
      */
  }
  loadImage(image) {
    if(this.IMG.src != image) {
      this.IMG.src = image;
    }
  }
  close() {
    this.zIndex = -1;
    this.visibility = "hidden";
  }
  open() {
    this.zIndex = this.def_zIndex;
    this.top = this.def_top;
    this.left = this.def_left;
    this.visibility = "visible";
  }
}
class Button extends MenuElement {
  constructor() {
    super();
    this.vol_ = 0;
    this.shake = this.defaultwidth / 10;
  }
  
  HoverAnimation() {
    this.vol_ += this.shake - this.width * 0.1;
    this.vol_ = this.vol_ * 0.9;
    this.width += this.vol_;
    this.height = this.width / 2;
  }

  Corner() {
    if(this.corners != false) {
      return this.corners;
    }
    let corner;
    corner = [[this.left, this.top], [this.left + this.width, this.top], [this.left, this.top + this.height], [this.left + this.width, this.top + this.height]];
    return corner;
  }
  
  mouseCollide() {
    if(mouseX > this.Corner()[0][0]&&
       mouseX < this.Corner()[3][0]&&
       mouseY > this.Corner()[1][1]&& 
       mouseY < this.Corner()[2][1]) {
      return true;
    }
    return false;
  }
}
// objects from the button class have collision
const playbutton = new Button();
const controlsbutton = new Button();
const exitbutton = new Button();

// MenuElement are the basic cordanites and Image values
const charmenu = new MenuElement();
const menutitle = new MenuElement();
const menubackground = new MenuElement();
const controls = new MenuElement();

/**
 * Image setting starts here
 * Declaring images takes a lot of lines
 * Images end at the ------- dashes
 */
  playbutton.IMG = new Image();
  playbutton.IMG.style.position = "fixed";
  playbutton.IMG.style.width;
  playbutton.IMG.style.height;
  playbutton.IMG.style.left; 
  playbutton.IMG.style.top;
  playbutton.IMG.style.zIndex;
  playbutton.IMG.id="PlayButton";
  document.body.appendChild(playbutton.IMG); 

  controlsbutton.IMG = new Image();
  controlsbutton.IMG.style.position = "fixed";
  controlsbutton.IMG.style.width;
  controlsbutton.IMG.style.height;
  controlsbutton.IMG.style.left; 
  controlsbutton.IMG.style.top;
  controlsbutton.IMG.style.zIndex;
  controlsbutton.IMG.src="images/MenuScreen/ControlsButton.svg";
  controlsbutton.IMG.id="ControlsButton";
  document.body.appendChild(controlsbutton.IMG);  

  exitbutton.IMG = new Image();
  exitbutton.IMG.style.position = "fixed";
  exitbutton.IMG.style.width;
  exitbutton.IMG.style.height;
  exitbutton.IMG.style.left; 
  exitbutton.IMG.style.top;
  exitbutton.IMG.style.zIndex;
  exitbutton.IMG.src="images/MenuScreen/Exit.svg";
  exitbutton.IMG.id="ExitButton";
  document.body.appendChild(exitbutton.IMG); 

  charmenu.IMG = new Image();
  charmenu.IMG.style.position = "fixed";
  charmenu.IMG.style.width;
  charmenu.IMG.style.height;
  charmenu.IMG.style.left; 
  charmenu.IMG.style.top;
  charmenu.IMG.style.zIndex;
  charmenu.IMG.src="images/MenuScreen/CharacterPoses/CharacterInMenu.svg";
  charmenu.IMG.id="CharMenu";
  document.body.appendChild(charmenu.IMG); 

  menutitle.IMG = new Image();
  menutitle.IMG.style.position = "fixed";
  menutitle.IMG.style.width;
  menutitle.IMG.style.height;
  menutitle.IMG.style.left; 
  menutitle.IMG.style.top;
  menutitle.IMG.style.zIndex;
  menutitle.IMG.src="images/GameTitle.svg";
  menutitle.IMG.id="MenuTitle";
  document.body.appendChild(menutitle.IMG); 

  controls.IMG = new Image();
  controls.IMG.style.position = "absolute";
  controls.IMG.style.width;
  controls.IMG.style.height;
  controls.IMG.style.left; 
  controls.IMG.style.top;
  controls.IMG.style.zIndex;
  controls.IMG.src="images/MenuScreen/Controls.svg";
  controls.IMG.id="Controls";
  document.body.appendChild(controls.IMG);  

  menubackground.IMG = new Image();
  menubackground.IMG.style.position = "fixed";
  menubackground.IMG.style.width;
  menubackground.IMG.style.height;
  menubackground.IMG.style.left; 
  menubackground.IMG.style.top;
  menubackground.IMG.style.width;
  menubackground.IMG.style.zIndex;
  menubackground.IMG.src="images/MenuBackground.png";
  menubackground.IMG.id="MenuBackground";
  document.body.appendChild(menubackground.IMG); 

let waitForMouseReleaseForMenu = false;

exitbutton.zIndex = exitbutton.def_zIndex = 990;
exitbutton.left = exitbutton.def_left = 50;
exitbutton.top = exitbutton.def_top = 100;
exitbutton.width = exitbutton.defaultwidth = 200;
exitbutton.height = exitbutton.width / 2;
exitbutton.visibility = "visible";

controls.zIndex = 901;
controls.left = controls.def_left = 0;
controls.top = controls.def_top = 0;
controls.width = controls.defaultwidth = window.innerWidth;
controls.height = controls.width * 0.69142857;
controls.visibility = "hidden";

/*-----------------------------------------
------Image Declaration Ends Here----------
-----------------------------------------*/

var mouseX = window.innerWidth / 2;
var mouseY = window.innerHeight / 2;
// If the mouse as not interacted with the window
// it defaults to the middle of the screen

var mouseDown = false;
export var GameState = "menu";

var sports_trap = new Audio("audio/Extreme-Sport-Trap-Music-PISTA.mp3");
sports_trap.volume = 0.075;


/*********************************************
*** Above this is setting values and images***
*** All the game loops are run below**********
**********************************************/


export function tick() {
  switch(GameState) {
    case "menu":
      MenuState();
      break;
    case "controls":
      ControlsState();
      break;
    default:
      console.log("GameState is unrecongnized:", GameState, "does not exist")
  }
    // menubackground.left = 0 - window.innerWidth / 3;
    // menubackground.width = window.innerWidth * 1.4;
    // menubackground.height = menubackground.width * 0.75;
    // menubackground.left =  window.innerWidth * -0.1  - mouseX / 10;
    // menubackground.top =  window.innerHeight * -0.25 - mouseY / 3;
  if(window.innerWidth * 0.75 > window.innerHeight) {
    menubackground.width = window.innerWidth;
    menubackground.height = menubackground.width * 0.75;
    if(window.innerHeight < menubackground.height) {
      menubackground.top = (window.innerHeight - menubackground.height) / 2;
    } else {
      menubackground.top = 0;
    }
  } else {
    menubackground.height = window.innerHeight;
    menubackground.width = menubackground.height * 1.4;
  }
    if(window.innerWidth < menubackground.width) {
      menubackground.left = (window.innerWidth - menubackground.width) / 2;
    } else {
      menubackground.left = 0;
    }

  
  RenderImage(menubackground, "px");
  menubackground.loadImage("images/MenuScreen/MenuBackground.png");
}

function RenderImage(object, measurement) {
  object.IMG.style.width = object.width + measurement;
  object.IMG.style.height = object.height + measurement;
  object.IMG.style.left = object.left + measurement; 
  object.IMG.style.top = object.top + measurement;
  object.IMG.style.zIndex = object.zIndex;
  object.IMG.style.visibility = object.visibility;
}

///////////////
///MenuState///
///////////////

let upDown = 0;
let bobTo = 0;
let waitCharMation = 0;

function MenuState() {
  menutitle.width = window.innerWidth * 0.6;
  menutitle.height = menutitle.width * 0.25;
  menutitle.left =  window.innerWidth * 0.025;
    if(upDown) {
      if(bobTo < 30) {
          bobTo += 1;
      }
    } else {
      if(bobTo > 10) {
          bobTo -= 1;
      }
    }
    if(menutitle.top > 28) {
      upDown = 0;
    }
    if(menutitle.top < 12) {
      upDown = 1;
    }

    menutitle.top += (bobTo - menutitle.top) * 0.1;
    // menutitle.top = menutitle.top * 0.5;

  RenderImage(menutitle, "px");
  menutitle.loadImage("images/MenuScreen/GameTitle.svg");

if(playbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "gaming";
    sports_trap.play();
    playbutton.shake = 5;
    close();
  } else {
    playbutton.shake = playbutton.defaultwidth / 9;
  }
} else {
  playbutton.shake = playbutton.defaultwidth / 10;
}
  playbutton.defaultwidth = window.innerWidth * 0.15
  // document.getElementById("buttonstats").innerHtml="playbutton.width";
  // document.getElementById("buttonstats").style.zIndex=100000;

  playbutton.HoverAnimation();

  playbutton.top = playbutton.def_top + menutitle.width * 0.25;
  playbutton.left = playbutton.def_left = window.innerWidth * 0.05

  RenderImage(playbutton, "px");
  playbutton.loadImage("images/MenuScreen/PlaySign.svg");

// charmenu.corners = [[charmenu.left, charmenu.top], [charmenu.left + charmenu.width, thcharmenuis.top], [charmenu.left, charmenu.top + charmenu.height], [charmenu.left + charmenu.width, charmenu.top + charmenu.height]];  
if(controlsbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "controls";
    opencontrols();
    controlsbutton.shake = 5;
  } else {
    controlsbutton.shake = controlsbutton.defaultwidth / 9;
  }
} else {
  controlsbutton.shake = controlsbutton.defaultwidth / 10;
}
  controlsbutton.defaultwidth = window.innerWidth * 0.15;
  controlsbutton.left = controlsbutton.def_left = window.innerWidth * 0.25;
  
  controlsbutton.HoverAnimation();

  controlsbutton.top = controlsbutton.def_top + menutitle.width * 0.25;
  

  RenderImage(controlsbutton, "px");
  controlsbutton.loadImage("images/MenuScreen/ControlsButton.svg");

  charmenu.left = window.innerWidth - 550 + mouseX / 15;
  charmenu.top = window.innerHeight - 300 + mouseY / 15;
//   charmenu.corners = [[charmenu.left, charmenu.top], [charmenu.left + charmenu.width, charmenu.top], [charmenu.left, charmenu.top + charmenu.height], [charmenu.left + charmenu.width, charmenu.top + charmenu.height]];
// ;
// if(charmenu.mouseCollide()) {

//   if(mouseDown) {
//     charmenu.shake = 5;
//   } else {
//     charmenu.shake = charmenu.defaultwidth / 8;
//   }
// } else {
//   charmenu.shake = charmenu.defaultwidth / 10;
// }
//   charmenu.HoverAnimation();

  RenderImage(charmenu, "px");
  if(waitCharMation > 50) {
    let pose = Math.round(Math.random() * 7);
    switch(pose) {
      case 0||1||2:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg");
        break;
      case 3:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu2.svg");
        break;
      case 4:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu3.svg");
        break;
      case 5:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu4.svg");
        break;
      case 6:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu5.svg");
        break;
      case 7:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu6.svg");
        break;
      default:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg");
        break;    
    }
    waitCharMation = 0;
  }
  
  waitCharMation += Math.random(); // I have it as random because it is more fluid
                                   // if the character changes poses randomly
  // this should be at the end, it can get stuff out of sink
}
function ControlsState() {
  
  controls.width = window.innerWidth;
  controls.height = controls.width * 0.69142857;
  
  RenderImage(controls, "px");
  controls.loadImage("images/MenuScreen/Controls.svg");

  exitbutton.defaultwidth = window.innerWidth / 5;
  exitbutton.left = window.innerWidth / 30;
  exitbutton.top = window.innerHeight / 20;
  
if(exitbutton.mouseCollide()) {
  if(mouseDown) {
    exitbutton.shake = 5;
    waitForMouseReleaseForMenu = true;
  } else {
    if(waitForMouseReleaseForMenu) {
      waitForMouseReleaseForMenu = false;
      GameState = "menu";
      openmenu();
    }
    exitbutton.shake = exitbutton.defaultwidth / 9;
  }
} else {
  exitbutton.shake = exitbutton.defaultwidth / 10;
}
  exitbutton.HoverAnimation();
  
  RenderImage(exitbutton.IMG, exitbutton, "px");
  exitbutton.loadImage("images/MenuScreen/Exit.svg");
}

function opencontrols() {
  exitbutton.defaultwidth = exitbutton.width = window.innerWidth / 5;
  controls.open();
  exitbutton.open();
  playbutton.close();
  controlsbutton.close();
  charmenu.close();
  menutitle.close();
  RenderImage(playbutton.IMG, playbutton, "px");
  RenderImage(controls.IMG, controls, "px");
  RenderImage(menutitle.IMG, menutitle, "px");
}

function openmenu() {

menubackground.zIndex = 900;
menubackground.left = 0;
menubackground.top = 0;
menubackground.visibility = "visible";

playbutton.defaultwidth = playbutton.width = window.innerWidth * 0.15;
playbutton.height = playbutton.width / 2;
playbutton.left = playbutton.def_left = window.innerWidth * 0.05;
playbutton.top = playbutton.def_top = 50;
playbutton.zIndex = playbutton.zIndex = 1000;

controlsbutton.zIndex = controlsbutton.def_zIndex = 990;
controlsbutton.left = controlsbutton.def_left = window.innerWidth * 0.25;
controlsbutton.top = controlsbutton.def_top = 50;
controlsbutton.width = controlsbutton.defaultwidth = window.innerWidth * 0.15;
controlsbutton.height = controlsbutton.width / 2;
controlsbutton.visibility = "visible";

charmenu.zIndex = charmenu.def_zIndex = 990;
charmenu.left = charmenu.def_left = 300;
charmenu.top = charmenu.def_top = 50;
charmenu.height = charmenu.def_height = 300;
charmenu.width = charmenu.def_width = 500;
charmenu.visibility = "visible";

menutitle.zIndex = menutitle.def_zIndex = 1001;
menutitle.left = menutitle.def_left = 300;
menutitle.top = menutitle.def_top = 50;
menutitle.height = menutitle.def_height = 300;
menutitle.width = menutitle.def_width = 500;
menutitle.visibility = "visible";


  
  controls.close();
  exitbutton.close();
  charmenu.open();
  controlsbutton.open();
  playbutton.open();
  menutitle.open();
  RenderImage(exitbutton, "px");
  exitbutton.loadImage("images/MenuScreen/Exit.svg");  
  RenderImage(controls, "px");
  charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg");
  GameState = "menu";
  // I have it where it changes to menu because it is the first state
}

function close() {
  menutitle.close();
  playbutton.close();
  controlsbutton.close();
  exitbutton.close();
  menubackground.close();
  charmenu.close();
  RenderImage(playbutton, "px");
  RenderImage(exitbutton, "px");
  RenderImage(controls, "px");
  RenderImage(menubackground, "px");
  RenderImage(menutitle, "px");
}
// from https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
// credits to them for all the mouse posistion stuff, it is quite usefull
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here
mouseX = event.pageX;
mouseY = event.pageY;
    }
})();

document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

window.addEventListener("load", () => { openmenu(); });