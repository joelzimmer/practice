require('./helpers/test_helper');

const bitwise = require('../src/bitwise_numbers');

describe('bitwise numbers', () => {
  context('asString', () => {
    it('represents a positive integer as a binary string', () => {
      const binary = bitwise.asString(9);
      expect(binary).to.equal('1001');
    });
  });

  context('as32BitString', () => {
    it('represents a positive integer as a 32bit string', () => {
      const stringified = bitwise.as32BitString(9);
      expect(stringified).to.equal('00000000000000000000000000001001');
    });
  });

  context('countTrueValuesInBinaryRepresentation', () => {
    it('returns 3 for the input string 11', () => {
      const count = bitwise.countTrueValuesInBinaryRepresentation(11);
      expect(count).to.equal(3);
    });
  });
});
