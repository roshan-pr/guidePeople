class Person {
  #target;
  #position;
  constructor(target) {
    this.#target = target;
    this.#position = { x: 0, y: 0 };
  }

  moveFront() {
    this.#position.x;
    ++this.#position.y;
  }
  moveBack() {
    this.#position.x;
    --this.#position.y;
  }
  moveLeft() {
    --this.#position.x;
    this.#position.y;
  }
  moveRight() {
    ++this.#position.x;
    this.#position.y;
  }

  display() {
    console.log('position :', this.#position.x, this.#position.y);
  }
}

const guidePeople = function () {

  const person = new Person({ x: 4, y: 4 });

  person.moveFront();
  person.moveLeft();
  // person.moveBack();
  person.display()
};

guidePeople();
