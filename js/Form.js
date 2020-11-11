class Form {
  constructor() {
    this.input = createInput("Your Name");
    this.button = createButton("Start");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    this.number = createElement("h1");
    this.resetButton = createButton("Reset");
    this.changeStatus = createButton("Switch to imposter/crewmate");
  }

  hide() {
    this.title.hide();
    this.number.hide();
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display() {
    this.title.html("Enter your name below");
    this.title.position(displayWidth / 2 - 120, displayHeight / 6);

    this.changeStatus.position(displayWidth - 480, displayHeight - 1000);

    this.input.position(displayWidth / 2 - 85, displayHeight / 4);
    this.button.position(displayWidth - 180, displayHeight - 218);
    this.resetButton.position(displayWidth - 180, displayHeight - 1000);

    this.button.size(150, 75);
    this.button.style("background", rgb(200, 163, 21));
    this.input.size(170, 20);
    this.title.style("color", "white");

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Waiting for other players...");
      this.greeting.style("color", "white");
      this.greeting.position(displayWidth / 2 - 120, displayHeight / 6);
      num = 0;
      flag = 1;
    });
    this.resetButton.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
    });
    if (status === "crewmate") {
      this.changeStatus.mousePressed(() => {
        status = "imposter";
      });
    } else {
      this.changeStatus.mousePressed(() => {
        status = "crewmate";
      });
    }
  }
}
