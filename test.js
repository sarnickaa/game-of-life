// TDD = red (write test to fail) green(write code to pass test) refactor (refactor code to pass)
const assert = require('assert');
const Assert = require('chai').assert

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

test that the only values in each board element are 0 or 1
it('only 0 and 1 in array', () => {
  let set
  for(let i = 0; i < index.board.length; i++) {
  set = new Set(index.board[i])
  // console.log(set.size)
  // console.log(set)
  // why would it be 2?
  // because the set is created from an array[1,0,0,1]...it sows you
    Assert.isAtMost(set.size, 2, 'set can not be more than 2')
    // if set.size === 1
    // test to see if value is either 1 or 0
    // if(set.size === 1) {
    //   Assert.
    // }
    // else:
    Assert.sameMembers([...set], [0, 1], 'set can only contain 1 or 0')
    // Assert.doesNotHaveAnyKeys(set, >2, 'set can only contain 1 or 0')
    // Assert.isAbove(-1)
    // assert.equal(set.has(1), true)
}});

it('target element is either 1 or 0', () => {
    Assert.expect(index.board[0][0] % 1).to.be.equal(0)
    Assert.isAtMost(index.board[0][0], 1)
    Assert.isAtLeast(index.board[0][0], 0)
});
