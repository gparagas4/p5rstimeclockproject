let slider;

function setup() {
  createCanvas(800, 800)
  slider = createSlider(0, 255, 100);
  slider.class("theSlider");
  //slider.position(100, 100);
  //slider.style('width', '80px');
}

function draw() {
  let val = slider.value();
  background(val);
}

function mouseClicked(){
  removeElements();
}
