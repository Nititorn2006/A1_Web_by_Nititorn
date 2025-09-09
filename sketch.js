let startButton;
let gameStarted = false;
let player1;
let leftX, leftY;
let rightX, rightY;
let ballX, ballY;
let ballSpeedX = 5;
let ballSpeedY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25, 20, 23);
  ballX = width / 2;
  ballY = height / 2;


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

  function drawBoarder() {
    stroke(100);
    line(0 + 20, 0 + 20, 0 + 20, windowHeight - 20); // Left border
    line(0 + 20, windowHeight - 20, windowWidth - 20, windowHeight - 20); // Bottom border
    line(windowWidth - 20, windowHeight - 20, windowWidth - 20, 0 + 20); // Right border
    line(windowWidth - 20, 0 + 20, 0 + 20, 0 + 20); // Top border
  }

  function leftPaddleHitBoarder() {
    if (leftY - 50 <= 20) {
      leftY = 70;

      // Draw and move the ball
      drawBall();
      ballX += ballSpeedX;
      ballY += ballSpeedY;
      // Ball bounces off top and bottom walls
      if (ballY - 10 <= 20 || ballY + 10 >= height - 20) {
        ballSpeedY = -ballSpeedY;
      }
    }

    if (leftY + 50 >= windowHeight - 20) {
      leftY = windowHeight - 70;
    }
  }

  function rightPaddleHitBoarder() {
    if (rightY - 50 <= 20) {
      rightY = 70;
    }
    if (rightY + 50 >= windowHeight - 20) {
      rightY = windowHeight - 70;
    }
  }

  function drawBall() {
    stroke(255);
    strokeWeight(4);
    ellipse(ballX, ballY, 20, 20);
  }

  let player1Score = 0;
  let player2Score = 0;

  function checkBallCollision() {
    if (ballX - 10 <= leftX + 5 && ballY >= leftY - 50 && ballY <= leftY + 50) {
      ballSpeedX = -ballSpeedX;
      ballSpeedY += random(-2, 2); // Add small random change to Y speed
    }
    if (ballX + 10 >= rightX - 5 && ballY >= rightY - 50 && ballY <= rightY + 50) {
      ballSpeedX = -ballSpeedX;
      ballSpeedY += random(-2, 2); // Add small random change to Y speed
    }
  }

  function draw() {
    if (gameStarted == true) {
      background(0);
      drawBoarder();
      drawLeftPaddle(leftX, leftY);
      drawRightPaddle(rightX, rightY);
      checkBallCollision();

      textSize(32);
      fill(100);
      text('Player 1', 50, 60);
      text('Player 2', width - 200, 60);
      fill(255);

      textSize(20);
      fill(100);
      text('Score : ' + player1Score, 50, 90);
      text('Score : ' + player2Score, width - 200, 90);
      fill(255);

      if (ballX + 20 >= width - 20) {
        player1Score += 1;
        // Reset ball to center, but slightly offset to avoid immediate re-score
        ballX = width / 2 - 30;
        ballY = height / 2;
        // Randomize ball direction, always moving left
        ballSpeedX = -max(4, abs(ballSpeedX));
        ballSpeedY = random([-5, -4, -3, 3, 4, 5]);
      }

      if (ballX - 20 <= 20) {
          player2Score += 1;
        // Reset ball to center, but slightly offset to avoid immediate re-score
        ballX = width / 2 + 30;
        ballY = height / 2;
        // Randomize ball direction, always moving right
        ballSpeedX = max(4, abs(ballSpeedX));
        ballSpeedY = random([-5, -4, -3, 3, 4, 5]);
      }

      leftPaddleHitBoarder();
      rightPaddleHitBoarder();

      drawBall();
      ballX += ballSpeedX;
      ballY += ballSpeedY;  
      // Ball bounces off top and bottom walls with small random change
      if (ballY - 10 <= 20 || ballY + 10 >= height - 20) {
        ballSpeedY = -ballSpeedY;
        ballSpeedY += random(-2, 2);
      }

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