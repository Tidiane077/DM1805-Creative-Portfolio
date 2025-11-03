// Define global variables
let size = 75; 
let color;

function setup() {
  createCanvas(640,480); 
  red = random(0, 255); 
  green = random(0, 255); 
  blue = random(0, 255); 
  color = [red, green, blue]
}

function draw() {
  background(200); 
  // Red circle
  fill(200, 0, 0); 
  ellipse(width/4, height/4, size*2);
  // Other circle
  fill(color); 
  ellipse(width/2, height/2, size);
  // What does the following do? 
  //size++;
}
