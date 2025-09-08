function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25, 20, 23);
  startButton = createButton('START');
  startButton.position(width / 2, height / 2);
  startButton.mousePressed(startGame);
  startButton.class('start-button');
}

  let startButton;
  let gameStarted = false;


  function startGame() {
    gameStarted = true;
    startButton.hide();
  }

  function draw() {
    if (gameStarted == true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      stroke(255, 0, 0);
    }
  }