function setup() {
  createCanvas(4000, 4000);
  rectMode("CENTER");
  angleMode('DEGREES');

}

function draw() {
  background(0);

  translate(2000, 2000);
  rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    fill(255);
    noStroke();
    text(hr +':'+ mn + ':' +sc, 10,200);
    

    strokeWeight(80);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(sc, 0, 59, 0, 360); 
    arc (0, 0, 3000, 3000, 0, secondAngle);

    stroke(150, 100, 255);
    let minAngle = map(mn, 0, 59, 0, 360);
    arc(0, 0, 2800, 2800, 0, minAngle);

    stroke(150, 255, 100);
    let hourAngle = map(hr % 12, 0, 12, 0, 360); 
    arc (0, 0, 2600, 2600, 0, hourAngle);
}

function mouseClicked() {
  console.log("go to text.js");
}