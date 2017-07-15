/* eslint no-bitwise: 0 */
const debug = require('debug')('bitwise');

// this prints the number as the binary string
const asString = number => (number).toString(2);

// in order to print it as the 32 bit operation
// from https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
const as32BitString = (mask) => {
  let shifted = mask;
  let string = '';
  // nMask must be between -2147483648 and 2147483647
  for (let count = 0; count < 32; count += 1) {
    string += String(shifted >>> 31);
    shifted <<= 1;
  }

  return string;
};

const countTrueValuesInBinaryRepresentation = (value) => {
  let count = 0;
  let trackedValue = value;
  debug('as32BitString(trackedValue)', as32BitString(trackedValue), trackedValue);
  while (trackedValue > 0) {
    // this is popping off the last value of the number as a 1 or 0, and increasing
    // the count if the value is 2
    if ((trackedValue & 1) === 1) {
      count += 1;
    }

    // shift the number over 1 bit to the right
    trackedValue >>= 1;
    debug('as32BitString(trackedValue)', as32BitString(trackedValue), trackedValue);
  }

  return count;
};

module.exports = {
  asString,
  as32BitString,
  countTrueValuesInBinaryRepresentation,
};
