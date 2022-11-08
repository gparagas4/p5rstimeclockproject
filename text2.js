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
    text("As Robert tries to get up for the first college semester, he turns on the lights to start his day", 40,100, width, height);

}

function mouseClicked() {
    console.log("go to animation.js");
}