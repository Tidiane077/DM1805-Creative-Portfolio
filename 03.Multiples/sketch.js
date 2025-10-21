let rgb = (255,0,0);
let select = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(rgb);
  if(select == 1) {
    rgb = (0,255,0);
  } else {
    rgb = (255,random(255),0);
  }

  for(let i=0; i<=100; i=i+3) {
    let r = random(70);
    circle(120 + r, 30 + i, i);
  }
}


function mouseClicked() {
  if (select == 0) {
    select = 1;
  } else {
    rgb = (255,0,0);
  }

  for(let i=0; i<=500; i=i+3) {
    r = random(10);
    circle(120+r+mouseX, 30+i,i);
  }
  
}
