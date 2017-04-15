function setup() {
    createCanvas(displayWidth, displayHeight*1.1);
}



function draw() {
    if (mouseIsPressed) {
        fill(29, 72, 255);
        stroke(255, 255, 255);
    } else {
        fill('#fff');

    }
    rectMode(CENTER);
    rect(mouseX, mouseY, 90, 60);
    textAlign(CENTER,CENTER);
    text('NEW', mouseX, mouseY);
    stroke(29, 72, 255);
}