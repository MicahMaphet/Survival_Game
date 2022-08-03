
class Button {
  constructor() {
    this.src;
    this.width;
    this.height;
    this.defaultwidth;
    this.left;
    this.top;
    this.vol_ = 0;
    this.zIndex = 1000;
    this.visibility = "visible";
    this.shake = this.defaultwidth / 10;
  }
  
  HoverAnimation() {
    this.vol_ += this.shake - this.width * 0.1;
    this.vol_ = this.vol_ * 0.9;
    this.width += this.vol_;
  }

  loadImage(image, id) {
    if(id.src != image) {
      id.src=image;
    }
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
  close() {
    this.zIndex = -1;
    this.visibility = "hidden";
  }
}

const playbutton = new Button();

var button = new Image();
  button.style.position = "absolute";
  button.style.width;
  button.style.height;
  button.style.left; 
  button.style.top;
  button.style.zIndex;
  button.id="PlayButton";
  document.body.appendChild(button);  

playbutton.defaultwidth = playbutton.width = 20;
playbutton.height = document.getElementById("PlayButton").style.height;
playbutton.left = 10;
playbutton.top = 10;
playbutton.zIndex = 1000;

var mouseX;
var mouseY;
var mouseDown = false;
export var GameState = "menu";

export function tick() {
if(playbutton.mouseCollide()) {
  if(mouseDown) {
    GameState = "gaming";
    playbutton.shake = 5;
    close();
  } else {
    playbutton.shake = 3;
  }
} else {
  playbutton.shake = playbutton.defaultwidth / 10;
}
  playbutton.HoverAnimation();

  
  RenderImage("PlayButton", playbutton);
  playbutton.loadImage("PlaySign.svg", PlayButton);
}

function RenderImage(image, object) {
  object.height = object.width;
// the height is exactly half the size of the width, by the pixel!
// I was quite supprised when I saw this
  document.getElementById(image).style.width = object.width + "%";
  document.getElementById(image).style.left = object.left + "%"; 
  document.getElementById(image).style.top = object.top + "%";
  document.getElementById(image).style.zIndex = object.zIndex;
  document.getElementById(image).style.visibility = object.visibility;
}

function close() {
  playbutton.close();
  RenderImage("PlayButton", playbutton);
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
mouseX = 100 * event.pageX / window.innerWidth;
mouseY = 100 * event.pageY / window.innerHeight;
    }
})();

document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

