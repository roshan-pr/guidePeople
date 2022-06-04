class Position {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(otherPosition) {
    return otherPosition instanceof Position &&
      otherPosition.#x === this.#x &&
      otherPosition.#y === this.#y;
  }
}

class Ground {
  #size;
  #target;

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
  console.log(ground.hasReachedTarget(new Position(2, 2)));
  console.log(ground.hasReachedTarget(new Position(4, 4)));

};

guidePeople();
