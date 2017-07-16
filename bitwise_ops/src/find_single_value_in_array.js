/* eslint no-bitwise: 0 */

// this function has some memory overhead
// and depends on the implementation of Object.keys
// but generally should be O(n)
const singleNumber = (array) => {
  // handle a base case of length 0
  if (array.length === 0) {
    return null;
  }

  // default the single value to the first element of the array
  let singleValue = array[0];
  const seenValues = {
    [singleValue]: true,
  };

  // iterate through the array,
  array.forEach((value) => {
    if (!seenValues[value]) {
      seenValues[value] = true;
    } else {
      seenValues[value] = false;
    }
  });

  // after iterating map through all values
  Object.keys(seenValues).forEach((key) => {
    if (seenValues[key]) {
      singleValue = Number(key);
    }
  });

  return singleValue;
};

// this is the clever implementation, based on the facebook
// interview tool
const singleNumberClever = (array) => {
  if (array.length === 0) {
    return null;
  }

  let singleValue = array[0];

  array.forEach((value, i) => {
    if (i > 0) {
      singleValue ^= value; // eslint-disable-line no-bitwise
    }
  });

  return singleValue;
};

const singleNumberCleverReduce = (array) => {
  if (array.length === 0) {
    return null;
  }

  let singleValue = array[0];

  array.reduce((accumulated, value, i) => {
    let calculated = accumulated;
    if (i > 0) {
      calculated ^= value;
    }

    return calculated;
  }, array[0]);
  array.forEach((value, i) => {
    if (i > 0) {
      singleValue ^= value;
    }
  });

  return singleValue;
};

module.exports = {
  singleNumber,
  singleNumberClever,
  singleNumberCleverReduce,
};
