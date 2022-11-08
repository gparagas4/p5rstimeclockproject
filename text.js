let font;

function preload(){
    font = loadFont("assests/Figerona-VF.ttf");
}

function setup() {
    createCanvas(4000, 4000);
    textFont(font);
    textSize(100);
}

function draw() {
    background(0);
    textWrap(WORD);
    Fill("red");
    text("Time goes fast as the ", 40,100, width, height);

}

function mouseClicked() {
    console.log("go to animation.js");
}