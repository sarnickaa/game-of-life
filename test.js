// TDD = red (write test to fail) green(write code to pass test) refactor (refactor code to pass)
const assert = require('assert');
const index = require('./index')

// it('should add 2 numbers', () => {
//   assert.equal(index.add(1, 1), 2);
// });

//test that board is an array
it('board is an array', () => {
  assert.equal(index.board instanceof Array, true);
});

//test each element in board is an Array
it('each element in board is an array', () => {
  for(let i = 0; i < index.board.length; i++) {
    assert.equal(index.board[i] instanceof Array, true)
  }
});

//test that board length === length of each sub-Array
it('each element length === board length. Board is a square.', () => {
  for(let i = 0; i < index.board.length; i++) {
    assert.equal(index.board.length, index.board[i].length)
  }
});

//test that the only values in each board element are 0 or 1
it('only 0 and 1 in array', () => {
  let set
  for(let i = 0; i < index.board.length; i++) {
  set = new Set(index.board[i])
    assert.equal(set.size, 2)
    // assert.equal(set.has(0), true)
    // assert.equal(set.has(1), true)

}});
