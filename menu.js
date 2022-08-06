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
    this.visibility = "visibile";
  }
}
class Button extends MenuElement {
  constructor() {
    super();
    // do no put anything in the super parenthasis

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

const playbutton = new Button();
const controlsbutton = new Button();
const exitbutton = new Button();
const menubackground = new MenuElement();
const controls = new MenuElement();

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
  ControlsButton.src="ControlsButton.svg";
  ControlsButton.id="ControlsButton";
  document.body.appendChild(ControlsButton);  

var ExitButton = new Image();
  ExitButton.style.position = "fixed";
  ExitButton.style.width;
  ExitButton.style.height;
  ExitButton.style.left; 
  ExitButton.style.top;
  ExitButton.style.zIndex;
  ExitButton.src="Exit.svg";
  ExitButton.id="ExitButton";
  document.body.appendChild(ExitButton); 

var Controls = new Image();
  Controls.style.position = "absolute";
  Controls.style.width;
  Controls.style.height;
  Controls.style.left; 
  Controls.style.top;
  Controls.style.zIndex;
  Controls.src="Controls.svg";
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
  MenuBackground.src="MenuBackground.png";
  MenuBackground.id="MenuBackground";
  document.body.appendChild(MenuBackground); 

  

playbutton.defaultwidth = playbutton.width = 200;
playbutton.height = playbutton.width / 2;
playbutton.left = 50;
playbutton.top = 50;
playbutton.zIndex = 1000;

menubackground.zIndex = 900;
menubackground.left = 0;
menubackground.top = 0;
menubackground.visibility = "visible";

controlsbutton.zIndex = controlsbutton.defzIndex = 990;
controlsbutton.left = controlsbutton.def_left = 300;
controlsbutton.top = controlsbutton.def_top = 50;
controlsbutton.width = controlsbutton.defaultwidth = 200;
controlsbutton.height = controlsbutton.width / 2;
controlsbutton.visibility = "visible";

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

var mouseX;
var mouseY;
var mouseDown = false;
export var GameState = "menu";
  // menubackground.close();

export function tick() {
  switch(GameState) {
    case "menu":
      MenuState();
      break;
    case "controls":
      ControlsState();
      break;
  }

  // menubackground.left = 0 - window.innerWidth / 3;
    menubackground.width = window.innerWidth;
    menubackground.height = menubackground.width * 0.75;
  
  RenderImage("MenuBackground", menubackground, "px");
  menubackground.loadImage("MenuBackground.png", MenuBackground);
}

function RenderImage(image, object, measurement) {

  document.getElementById(image).style.width = object.width + measurement;
  document.getElementById(image).style.height = object.height + measurement;
  document.getElementById(image).style.left = object.left + measurement; 
  document.getElementById(image).style.top = object.top + measurement
  document.getElementById(image).style.zIndex = object.zIndex;
  document.getElementById(image).style.visibility = object.visibility;
}

function MenuState() {
if(playbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "gaming";
    playbutton.shake = 5;
    close();
  } else {
    playbutton.shake = playbutton.defaultwidth / 8;
  }
} else {
  playbutton.shake = playbutton.defaultwidth / 10;
}

  playbutton.HoverAnimation();

  RenderImage("PlayButton", playbutton, "px");
  playbutton.loadImage("PlaySign.svg", PlayButton);

if(controlsbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "controls";
    opencontrols();
    controlsbutton.shake = 5;
  } else {
    controlsbutton.shake = controlsbutton.defaultwidth / 8;
  }
} else {
  controlsbutton.shake = controlsbutton.defaultwidth / 10;
}
  controlsbutton.HoverAnimation();

  RenderImage("ControlsButton", controlsbutton, "px");
  playbutton.loadImage("ControlsButton.svg", ControlsButton);

}

function ControlsState() {
  
  controls.width = window.innerWidth;
  controls.height = controls.width * 0.69142857;
  
  RenderImage("Controls", controls, "px");
  menubackground.loadImage("Controls.svg", Controls);

  exitbutton.defaultwidth = window.innerWidth / 5;
  exitbutton.left = window.innerWidth / 30;
  exitbutton.top = window.innerHeight / 20;
  


if(exitbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "menu";
    openmenu();
    exitbutton.shake = 5;
  } else {
    exitbutton.shake = exitbutton.defaultwidth / 8;
  }
} else {
  exitbutton.shake = exitbutton.defaultwidth / 10;
}
  exitbutton.HoverAnimation();
  
  RenderImage("ExitButton", exitbutton, "px");
  menubackground.loadImage("Exit.svg", ExitButton);
}


function opencontrols() {
  exitbutton.defaultwidth = exitbutton.width = window.innerWidth / 5;
  controls.visibility = "visibile";
  playbutton.close();
  controlsbutton.close();
  RenderImage("PlayButton", playbutton, "px");
  RenderImage("Controls", controls, "px");
}

function openmenu() {
  controls.visibility = "hidden";
  exitbutton.close();
  RenderImage("ExitButton", exitbutton, "px");
  menubackground.loadImage("Exit.svg", ExitButton);  RenderImage("Controls", controls, "px");
}

function close() {
  playbutton.close();
  controlsbutton.close();
  menubackground.close();
  RenderImage("PlayButton", playbutton, "px");
  RenderImage("Controls", controls, "px");
  RenderImage("MenuBackground", menubackground, "px");
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

