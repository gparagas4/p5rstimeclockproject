//clock tick

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
    Fill("red");
    text("Clock is ticking, another semester rolling by. TIC TOK TIC TOK TIC TOK ", 40,100, width, height);

}

function mouseClicked() {
    console.log("go to clockanimation");
}