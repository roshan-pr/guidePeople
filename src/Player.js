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

  move(command) {
    const moves = { forward: () => this.#stepForward() };
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
