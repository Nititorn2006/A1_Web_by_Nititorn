let startButton;
let gameStarted = false;
let player1;
let leftX, leftY;
let rightX, rightY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25, 20, 23);
  
  startButton = createButton('START');
  startButton.position(width / 2, height / 2);
  startButton.mousePressed(startGame);
  startButton.class('start-button');

  leftX = 50;
  leftY = height / 2;
  rightX = width - 50;
  rightY = height / 2;
}

  function startGame() {
    gameStarted = true;
    startButton.hide();
  }

  function drawLeftPaddle(x, y) {
    stroke(255);
    strokeWeight(4);
    line(x, y - 50, x, y + 50);
  }

  function drawRightPaddle(x, y) {
    stroke(255);
    strokeWeight(4);
    line(x, y - 50, x, y + 50);
  }

  function draw() {
    if (gameStarted == true) {
      background(25, 20, 23); 
      drawLeftPaddle(leftX, leftY);
      drawRightPaddle(rightX, rightY);

    if (keyIsDown(87)) {
      leftY -= 10;
    }
    if (keyIsDown(83)) {
      leftY += 10;
    }

    if (keyIsDown(UP_ARROW)) {
      rightY -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      rightY += 10;
    }

    }
  }