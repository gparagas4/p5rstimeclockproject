let font;

function preload(){
    font = loadFont("assets/Figerona-VF.ttf");
}

function setup() {
    createCanvas(2000, 2000);
    textFont(font);
    textSize(100);
}

function draw() {
    background(0);
    textWrap(WORD);
    Fill("white"); 
    text("Robert's New Day", 60,140, width, height);

}

function mouseClicked() {
    console.log("go to clockticktoktext.js");
}