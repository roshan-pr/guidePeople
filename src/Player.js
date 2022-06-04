class Player {
  #position;
  constructor(position) {
    this.#position = position;
  }

  #stepForward() {
    const newPoint = this.#position.translate(0, 1);
    this.#position = newPoint;
    return newPoint;
  }

  #stepLeft() {
    const newPoint = this.#position.translate(-1, 0);
    this.#position = newPoint;
    return newPoint;
  }

  move(command) {
    const moves = {
      forward: () => this.#stepForward(),
      left: () => this.#stepLeft()
    };
    return moves[command]();
  }

  toString() {
    return 'Player at : ' + this.#position.toString();
  }

  equals(otherPlayer) {
    return otherPlayer instanceof Player;
  }
}

exports.Player = Player;
