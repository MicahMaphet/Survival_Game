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
    /**
      * It's usefull to have vairiables for all the image
      * properties so they can be tested before they are rendered
      * They can also have defaults and are easier to access and loop through
      */
  }
  loadImage(image, id) {
    if(id.src != image) {
      id.src=image;
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
var button = new Image();
  button.style.position = "fixed";
  button.style.width;
  button.style.height;
  button.style.left; 
  button.style.top;
  button.style.zIndex;
  button.id="PlayButton";
  document.body.appendChild(button); 

var ControlsButton = new Image();
  ControlsButton.style.position = "fixed";
  ControlsButton.style.width;
  ControlsButton.style.height;
  ControlsButton.style.left; 
  ControlsButton.style.top;
  ControlsButton.style.zIndex;
  ControlsButton.src="images/MenuScreen/ControlsButton.svg";
  ControlsButton.id="ControlsButton";
  document.body.appendChild(ControlsButton);  

var ExitButton = new Image();
  ExitButton.style.position = "fixed";
  ExitButton.style.width;
  ExitButton.style.height;
  ExitButton.style.left; 
  ExitButton.style.top;
  ExitButton.style.zIndex;
  ExitButton.src="images/MenuScreen/Exit.svg";
  ExitButton.id="ExitButton";
  document.body.appendChild(ExitButton); 

var CharMenu = new Image();
  CharMenu.style.position = "fixed";
  CharMenu.style.width;
  CharMenu.style.height;
  CharMenu.style.left; 
  CharMenu.style.top;
  CharMenu.style.zIndex;
  CharMenu.src="images/MenuScreen/CharacterPoses/CharacterInMenu.svg";
  CharMenu.id="CharMenu";
  document.body.appendChild(CharMenu); 

var MenuTitle = new Image();
  MenuTitle.style.position = "fixed";
  MenuTitle.style.width;
  MenuTitle.style.height;
  MenuTitle.style.left; 
  MenuTitle.style.top;
  MenuTitle.style.zIndex;
  MenuTitle.src="images/GameTitle.svg";
  MenuTitle.id="MenuTitle";
  document.body.appendChild(MenuTitle); 

var Controls = new Image();
  Controls.style.position = "absolute";
  Controls.style.width;
  Controls.style.height;
  Controls.style.left; 
  Controls.style.top;
  Controls.style.zIndex;
  Controls.src="images/MenuScreen/Controls.svg";
  Controls.id="Controls";
  document.body.appendChild(Controls);  

var MenuBackground = new Image();
  MenuBackground.style.position = "fixed";
  MenuBackground.style.width;
  MenuBackground.style.height;
  MenuBackground.style.left; 
  MenuBackground.style.top;
  MenuBackground.style.width;
  MenuBackground.style.zIndex;
  MenuBackground.src="images/MenuBackground.png";
  MenuBackground.id="MenuBackground";
  document.body.appendChild(MenuBackground); 

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

  
  RenderImage("MenuBackground", menubackground, "px");
  menubackground.loadImage("images/MenuScreen/MenuBackground.png", MenuBackground);
}

function RenderImage(image, object, measurement) {
  document.getElementById(image).style.width = object.width + measurement;
  document.getElementById(image).style.height = object.height + measurement;
  document.getElementById(image).style.left = object.left + measurement; 
  document.getElementById(image).style.top = object.top + measurement;
  document.getElementById(image).style.zIndex = object.zIndex;
  document.getElementById(image).style.visibility = object.visibility;
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

  RenderImage("MenuTitle", menutitle, "px");
  menubackground.loadImage("images/MenuScreen/GameTitle.svg", MenuTitle);

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
  document.getElementById("buttonstats").innerHtml="playbutton.width";
  document.getElementById("buttonstats").style.zIndex=100000;

  playbutton.HoverAnimation();

  playbutton.top = playbutton.def_top + menutitle.width * 0.25;


  RenderImage("PlayButton", playbutton, "px");
  playbutton.loadImage("images/MenuScreen/PlaySign.svg", PlayButton);

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
  controlsbutton.HoverAnimation();

  controlsbutton.top = controlsbutton.def_top + menutitle.width * 0.25;
  

  RenderImage("ControlsButton", controlsbutton, "px");
  charmenu.loadImage("images/MenuScreen/ControlsButton.svg", ControlsButton);

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


  RenderImage("CharMenu", charmenu, "px");
  if(waitCharMation > 50) {
    let pose = Math.round(Math.random() * 7);
    switch(pose) {
      case 0||1||2:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg", CharMenu);
        break;
      case 3:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu2.svg", CharMenu);
        break;
      case 4:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu3.svg", CharMenu);
        break;
      case 5:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu4.svg", CharMenu);
        break;
      case 6:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu5.svg", CharMenu);
        break;
      case 7:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu6.svg", CharMenu);
        break;
      default:
        charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg", CharMenu);
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
  
  RenderImage("Controls", controls, "px");
  menubackground.loadImage("images/MenuScreen/Controls.svg", Controls);

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
  
  RenderImage("ExitButton", exitbutton, "px");
  menubackground.loadImage("images/MenuScreen/Exit.svg", ExitButton);
}


function opencontrols() {
  exitbutton.defaultwidth = exitbutton.width = window.innerWidth / 5;
  controls.open();
  exitbutton.open();
  playbutton.close();
  controlsbutton.close();
  charmenu.close();
  menutitle.close();
  RenderImage("PlayButton", playbutton, "px");
  RenderImage("Controls", controls, "px");
  RenderImage("MenuTitle", menutitle, "px");
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
  RenderImage("ExitButton", exitbutton, "px");
  menubackground.loadImage("images/MenuScreen/Exit.svg", ExitButton);  
  RenderImage("Controls", controls, "px");
  charmenu.loadImage("images/MenuScreen/CharacterPoses/CharacterInMenu1.svg", CharMenu);
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
  RenderImage("PlayButton", playbutton, "px");
  RenderImage("ExitButton", exitbutton, "px");
  RenderImage("Controls", controls, "px");
  RenderImage("MenuBackground", menubackground, "px");
  RenderImage("MenuTitle", menutitle, "px");
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