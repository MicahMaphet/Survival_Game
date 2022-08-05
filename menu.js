class MenuElement {
  constructor(src = "", width = 0, height = 0, left = 0, top = 0, zIndex = 1000, visibility = "visible") {
    this.src = src;
    this.width = width;
    this.height = height;
    this.defaultwidth = width;
    this.left = left;
    this.top = top;
    this.zIndex = zIndex;
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
const menubackground = new MenuElement();

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
menubackground.width = 100;

controlsbutton.zIndex = 990;
controlsbutton.left = 300;
controlsbutton.top = 50;
controlsbutton.width = controlsbutton.defaultwidth = 200;
controlsbutton.height = controlsbutton.width / 2;
controlsbutton.visibility = "visible";

var mouseX;
var mouseY;
var mouseDown = false;
export var GameState = "menu";
  // menubackground.close();

export function tick() {

// console.log(controlsbutton.zIndex, controlsbutton.visibility, controlsbutton.left, controlsbutton.top, menubackground.zIndex, controlsbutton.width, controlsbutton.height);
  
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

  // menubackground.left = 0 - window.innerWidth / 3;
  menubackground.top = 0 - window.innerHeight / 5;
  if(window.innerWidth > window.innerHeight) {
    menubackground.width = window.innerWidth;
    menubackground.height = window.innerWidth * menubackground.HeightRatio;
  } else {
    menubackground.height = window.innerHeight;
    menubackground.width = window.innerHeight * menubackground.WidthRatio;
  }
  
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

function close() {
  playbutton.close();
  controlsbutton.close();
  menubackground.close();
  RenderImage("PlayButton", playbutton, "px");
  RenderImage("MenuBackground", menubackground, "px");
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

