img = "";

function preload(){
    img = loadImage('bedroom.jpeg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(350,150);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bedroom", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}