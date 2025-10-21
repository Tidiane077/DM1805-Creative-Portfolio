function setup() {
  createCanvas(400, 400);
  background(0,20,225);
}

function draw() {
  background(0,0,200);
  fill(255,255,0)
  stroke (0)
  circle(200,200,250);
  fill(0,0,0)
  arc(200,200,150,150,0,PI);
  fill(0,0,0)
  ellipse(150,150,30,50);
  ellipse(250,150,30,50);
  stroke(0)
  strokeWeight(25)
  line(200,150,200,100);
}