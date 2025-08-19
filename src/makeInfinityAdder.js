'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = sum;
      sum = 0;
      return result;
    }

    if (typeof num !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    sum += num;
    return adder;
  }
  return adder;
}

module.exports = makeInfinityAdder;
