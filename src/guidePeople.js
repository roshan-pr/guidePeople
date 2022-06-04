const { Player } = require("./Player.js");
const { Position } = require("./Position.js");

class Ground {
  #size; #target;

  constructor(size, target) {
    this.#size = size;
    this.#target = target;
  }

  hasReachedTarget(currentPosition) {
    return currentPosition.equals(this.#target);
  }
}

class Game {
  #ground;
  #player;
  constructor(ground, player) {
    this.#ground = ground;
    this.#player = player;
  }

  movePlayer(command) {
    return this.#player.move(command);
  }

  equals(otherGame) {
    return otherGame instanceof Game;
  }
}

const guidePeople = function () {
  const size = 4;
  const target = new Position(size, size);

  const ground = new Ground(size, target);
  // console.log(ground.hasReachedTarget(new Position(2, 2)));
  // console.log(ground.hasReachedTarget(new Position(4, 4)));
  const player = new Player(new Position(0, 0));
  // const newPoint = player.stepForward();
  // console.log(player + '');
  const game = new Game(ground, player);
  const newPosition = game.movePlayer('forward');
  console.log(newPosition + '');
};

guidePeople();
