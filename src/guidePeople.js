const { Position } = require("./Position");

class Player {
  #position;
  constructor(position) {
    this.#position = position;
  }

  stepForward() {
    const newPoint = this.#position.translate(0, 1);
    this.#position = newPoint;
    return newPoint;
  }

  toString() {
    return 'Player at : ' + this.#position.toString();
  }

  equals(otherPlayer) {
    return otherPlayer instanceof Player;
  }
}

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

const guidePeople = function () {
  const size = 4;
  const target = new Position(size, size);

  const ground = new Ground(size, target);
  // console.log(ground.hasReachedTarget(new Position(2, 2)));
  // console.log(ground.hasReachedTarget(new Position(4, 4)));
  const player = new Player(new Position(0, 0));
  const newPoint = player.stepForward();
  console.log(player + '');
  console.log(newPoint.equals(newPoint), 'In main');
};

guidePeople();
