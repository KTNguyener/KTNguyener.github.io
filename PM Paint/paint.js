var vw = window.innerWidth;
var vh = window.innerHeight;
var gui;
//tells my program it has a GUI

var value = 'white';
//default color on load
var Color = '#000000';
var BrushSize = [1,5,10,20,100];//MUST HAVE MORE THAN 3 or it thinks it's RGB color
//Brush size in pixels
var Mode = ['Draw','Clear All']
//Paint mode menu


function setup() {
  createCanvas(vw,vh);//The canvas uses the entire window
  background('white');
  stroke(0,50);
  gui = createGui('My Menu',0,0);//Creates the gui variable to be used
  gui.addGlobals('Color','Mode','BrushSize');//These correspond to the variables I left above

}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(BrushSize); //Draw the width based on BrushSize
    stroke(color(Color)); //Make it a color that the user selects
    line(mouseX, mouseY, pmouseX, pmouseY);//current position of where the mouse is, then the previous position of the mouse based on time
  }
  else {
    noFill();//backup for when no mouse is pressed
  }
}

switch(Mode) {
  case 'Clear All':
    clear();
    break;//stops the loop of the clear all
}

function keyTyped() {
  if (key === 'c') {
    clear();//When user presses c, clear drawing
  }
  else if (key === 's') {
    var name = prompt("Enter name of your drawing:")
    var name = name + ".png"
    save(name)//When user presses s, save drawing as whatever the name is.
  }
}
