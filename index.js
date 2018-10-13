// const add = (num1, num2) => num1 + num2

// RULES:
// 1. Any live cell with fewer than two live neighbours dies

// define neighbours
// define what defines 'alive'
// apply rule to determine target cell life/death

const board = [
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  // so this line is why it's failing?
  [0, 0, 0, 0],
  [0, 1, 1, 0]
]
// test that board is array
//

// let 0 = dead
// let 1 = alive

// select coordinates for start cell - declare start cell
// check if live or dead
// determine what its neighbours are
// const zeroOrOne = function (board) {
//   return board[0][0]
// }




module.exports = {
  // add,
  board
  // zeroOrOne
}
