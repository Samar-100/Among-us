var gameState = 0;
var playerCount;
var database;
var player;
var dummy1, dummy2, dummy3, dummy4, dummy5;
var laptopImg, use1, use2, kill1, kill2, report1, report2, sabotage;
var laptop, use, kill, report, sabotageS;
var status = "crewmate";

var form, player, game;

function preload() {
  red = loadImage("images/red.png");
  blue = loadImage("images/blue.png");
  orange = loadImage("images/orange.png");
  pink = loadImage("images/pink.png");
  black = loadImage("images/black.png");
  green = loadImage("images/green.png");
  laptopImg = loadImage("images/laptop.png");
  use1 = loadImage("images/use-bright.png");
  use2 = loadImage("images/use-dull.png");
  kill1 = loadImage("images/kill-bright.png");
  kill2 = loadImage("images/kill-dull.png");
  report1 = loadImage("images/report-bright.png");
  report2 = loadImage("images/report-dull.png");
  sabotageS = loadImage("images/Sabotage.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight - 118);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(0);
  if (playerCount === 1) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    form.hide();
    game.play();
    if (status === "crewmate") {
      use = createSprite(
        displayWidth / 2 + 750,
        displayHeight / 2 + 240,
        20,
        20
      );
      use.addAnimation("use2", use2);
      use.addAnimation("use1", use1);

      report = createSprite(
        displayWidth / 2 + 750,
        displayHeight / 2 + 240,
        20,
        20
      );
      report.addImage(report2);
    } else if (status === "imposter") {
      sabotage = createSprite(
        displayWidth / 2 + 750,
        displayHeight / 2 + 200,
        20,
        20
      );
      sabotage.addImage(sabotageS);

      kill = createSprite(
        displayWidth / 2 + 750,
        displayHeight / 2 + 240,
        20,
        20
      );
      kill.addImage(kill2);

      report = createSprite(
        displayWidth / 2 + 750,
        displayHeight / 2 + 240,
        20,
        20
      );
      report.addImage(report2);
    }
  }
}
