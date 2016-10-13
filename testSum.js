//eslint-disable-next-line
const sum = require('./sum');

const assert = require('assert');

function testSum() {
  const answer = sum(4, 5);
  assert(answer === 9, '4 + 5 != 9');
}

testSum();