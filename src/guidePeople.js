const { Ground } = require("./Ground");
const { Player } = require("./Player.js");
const { Position } = require("./Position.js");

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

  isOver(currentPosition) {
    return this.#ground.hasReachedTarget(currentPosition);
  }

  equals(otherGame) {
    return otherGame instanceof Game;
  }
}

const guidePeople = function () {
  const size = 4;
  const target = new Position(size, size);
  const ground = new Ground(size, target);

  const player = new Player(new Position(1, 1));
  const game = new Game(ground, player);

  let newPosition = game.movePlayer('forward');
  newPosition = game.movePlayer('left');
  console.log(newPosition + '');

  if (game.isOver(newPosition)) {
    console.log('Game Over');
  };
};

guidePeople();
