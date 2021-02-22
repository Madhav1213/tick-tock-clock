var hr;
var min;
var sc;



function setup() {
  createCanvas(800,400);
  hr = hour();
  min = minute();
  sc = second();

 
}

function draw() {
  background(255,255,255);

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  //drawing seconds hand.
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  hrAngle = map(hr,0,0,12,360);
  //drawing hour hand
  push();
  rotate(hrAngle);
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  minAngle = map(min,60,0,0,360);
  //drawing minute hand
  push();
  rotate(minAngle);
  stroke(200,0,0);
  strokeWeight(7);
  line(0,0,110,0);
  pop();


  drawSprites();
}