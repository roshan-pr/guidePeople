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
exports.Ground = Ground;
