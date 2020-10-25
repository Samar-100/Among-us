var gameState = 0;
var playerCount;
var database;
var player;

var form, player, game;

function preload() {
  among_us = loadImage("among-us.png");
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
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    form.hide();
    game.play();
  }
}
