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
    player.addImage(red);
    player.scale = 0.5;

    dummy1 = createSprite(
      displayWidth / 2 - 300,
      displayHeight / 2 - 300,
      20,
      20
    );
    dummy1.addImage(blue);
    dummy1.scale = 0.5;

    dummy2 = createSprite(displayWidth / 2 + 500, displayHeight / 2, 20, 20);
    dummy2.addImage(green);
    dummy2.scale = 0.5;

    dummy3 = createSprite(
      displayWidth / 2 + 300,
      displayHeight / 2 + 300,
      20,
      20
    );
    dummy3.addImage(black);
    dummy3.scale = 0.5;

    dummy4 = createSprite(displayWidth / 2, displayHeight / 2 - 450, 20, 20);
    dummy4.addImage(pink);
    dummy4.scale = 0.5;

    dummy5 = createSprite(
      displayWidth / 2 - 600,
      displayHeight / 2 + 200,
      20,
      20
    );
    dummy5.addImage(orange);
    dummy5.scale = 0.5;

    laptop = createSprite(
      displayWidth / 2 - 800,
      displayHeight / 2 + 250,
      20,
      20
    );
    laptop.addImage(laptopImg);
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
