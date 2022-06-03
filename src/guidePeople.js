const moveFront = ({ x, y }) => ({ x, y: ++y });
const moveBack = ({ x, y }) => ({ x, y: --y });
const moveLeft = ({ x, y }) => ({ x: --x, y });
const moveRight = ({ x, y }) => ({ x: ++x, y });

const guidePeople = function () {
  const position = { x: 0, y: 0 };
  console.log(moveFront(position));
  console.log(moveBack(position));
  console.log(moveLeft(position));
  console.log(moveRight(position));
};

guidePeople();
