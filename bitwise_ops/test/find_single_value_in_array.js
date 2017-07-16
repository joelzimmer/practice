require('./helpers/test_helper');

const singleNumbers = require('../src/find_single_value_in_array');

describe('find single number in array numbers', () => {
  context('singleNumber (my implementation)', () => {
    it('returns the (only) single value in the array', () => {
      const singleValue = singleNumbers.singleNumber([1]);
      expect(singleValue).to.equal(1);
    });

    it('returns the only single value in the array', () => {
      const singleValue = singleNumbers.singleNumber([1, 2, 3, 2, 1]);
      expect(singleValue).to.equal(3);
    });
  });

  context('singleNumber (clever implementation)', () => {
    it('returns the (only) single value in the array', () => {
      const singleValue = singleNumbers.singleNumberClever([1]);
      expect(singleValue).to.equal(1);
    });

    it('returns the only single value in the array', () => {
      const singleValue = singleNumbers.singleNumberClever([1, 2, 3, 2, 1]);
      expect(singleValue).to.equal(3);
    });
  });

  context('singleNumber (clever implementation with reduce)', () => {
    it('returns the (only) single value in the array', () => {
      const singleValue = singleNumbers.singleNumberCleverReduce([1]);
      expect(singleValue).to.equal(1);
    });

    it('returns the only single value in the array', () => {
      const singleValue = singleNumbers.singleNumberCleverReduce([1, 2, 3, 2, 1]);
      expect(singleValue).to.equal(3);
    });
  });
});
