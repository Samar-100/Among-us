class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    player = createSprite(displayWidth / 2, displayHeight / 2, 20, 20);
    player.addImage(among_us);
    player.scale = 0.07;
  }
  play() {
    if (keyIsDown(87)) {
      player.y -= 20;
    }
    if (keyIsDown(83)) {
      player.y += 20;
    }
    if (keyIsDown(68)) {
      player.x += 20;
    }
    if (keyIsDown(65)) {
      player.x -= 20;
    }
    drawSprites();
  }
}
