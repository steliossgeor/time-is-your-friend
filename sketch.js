let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;

let img2Visible = true;
let img3Visible = false;
let img4Visible = false;
let img5Visible = false;
let img6Visible = false;
let img7Visible = false;

let lastMoveTime = 0;
let delayTime = 500;
let img4StartTime = 0;
let img5StartTime = 0;
let img6StartTime = 0;
let img7StartTime = 0;

let firstClick = false;
let mouseActiveTime = 0;

function preload() {
  img = loadImage('background.gif');
  img2 = loadImage('fig1.png');
  img3 = loadImage('fig2.png');
  img4 = loadImage('fig3.png');
  img5 = loadImage('fig4.png');
  img6 = loadImage('fig5.png');
  img7 = loadImage('fig6.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  img3Visible = false;
  img6Visible = false;
  img7Visible = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(img);
  image(img, 0, 0, width, height);

  if (img2Visible) {
    image(img2, (width - img2.width) / 2, (height - img2.height) / 2);
  }

  if (img3Visible) {
    image(img3, (width - img3.width) / 2, (height - img3.height) / 2);
  }

  if (img4Visible) {
    image(img4, (width - img4.width) / 2, (height - img4.height) / 2);
  }

  if (img5Visible) {
    image(img5, (width - img5.width) / 2, (height - img5.height) / 2);
  }

  if (img6Visible) {
    image(img6, (width - img6.width) / 2, (height - img6.height) / 2);
  }

  if (img7Visible) {
    image(img7, (width - img7.width) / 2, (height - img7.height) / 2);
  }

  if (millis() - lastMoveTime > delayTime) {
    if (!img2Visible) { 
      showImg3();
    }
  }

  if (img4Visible && millis() - img4StartTime >= 1000 && !img5Visible) {
    showImg5(); 
  }

  if (img5Visible && millis() - img5StartTime >= 1000 && !img6Visible) {
    showImg6(); 
  }

  if (img6Visible && millis() - img6StartTime >= 3000 && !img7Visible) {
    showImg7(); 
  }
}

function mousePressed() {

  if (firstClick) return;

  let img2X = (width - img2.width) / 2;
  let img2Y = (height - img2.height) / 2;

  if (mouseX > img2X && mouseX < img2X + img2.width &&
      mouseY > img2Y && mouseY < img2Y + img2.height) {
    img2Visible = false;  
    img3Visible = true;
    firstClick = true; 
  }
}

function mouseMoved() {

  mouseActiveTime = millis();
  lastMoveTime = millis(); 

  if (img3Visible && !img4Visible) {
    showImg4(); 
  }

  if (img4Visible && millis() - img4StartTime >= 1000 && !img5Visible) {
    showImg5(); 
  }

  if (img5Visible && millis() - img5StartTime >= 1000 && !img6Visible) {
    showImg6();
  }

  if (img6Visible && millis() - img6StartTime >= 1000 && !img7Visible) {
    showImg7();
  }
}

function hideAllImages() {
  img2Visible = false;
  img3Visible = false;
  img4Visible = false;
  img5Visible = false;
  img6Visible = false;
  img7Visible = false;
}

function showImg3() {
  hideAllImages();
  img3Visible = true;
}

function showImg4() {
  hideAllImages();
  img4Visible = true; 
  img4StartTime = millis(); 
}

function showImg5() {
  hideAllImages();
  img5Visible = true;
  img5StartTime = millis();
}

function showImg6() {
  hideAllImages();
  img6Visible = true;
  img6StartTime = millis();
}

function showImg7() {
  hideAllImages();
  img7Visible = true;
  img7StartTime = millis();
}
