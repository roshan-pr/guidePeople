class Position {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  translate(xDelta, yDelta) {
    const x = this.#x + xDelta;
    const y = this.#y + yDelta;
    return new Position(x, y);
  }

  equals(otherPosition) {
    return otherPosition instanceof Position &&
      this.#x === otherPosition.#x &&
      this.#y === otherPosition.#y;
  }

  toString() {
    return `(${this.#x},${this.#y})`;
  }

}

exports.Position = Position;
