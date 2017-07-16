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

  context('operators', () => {
    let operator;

    context('xor', () => {
      beforeEach(() => {
        operator = 'xor';
      });

      it('(nice) returns 0 when comparing the value to itself', () => {
        for (let i = 0; i < 10; i++) { // eslint-disable-line no-plusplus
          const result = bitwise.operators(operator, i, i);
          expect(result).to.equal(0);
        }
      });

      it('(really nice) returns the other value when comparing the value to itself and another value', () => {
        for (let i = 0; i < 10; i++) { // eslint-disable-line no-plusplus
          const result = bitwise.operators(operator, i, i + 1, i);
          expect(result).to.equal(i + 1);
        }
      });

      it('will do an xor at the bit level', () => {
        // xor returns 1 when values are the same
        let result = bitwise.operators(operator, 4, 2);
        // 4 = 100
        // 2 = 010
        // ^ = 110 => 6
        expect(result).to.equal(6);

        result = bitwise.operators(operator, 1, 2);
        // 1 = 01
        // 2 = 10
        // ^ = 11 => 3
        expect(result).to.equal(3);
      });
    });

    context('and', () => {
      beforeEach(() => {
        operator = 'and';
      });

      it('returns the value when comparing the value to itself', () => {
        for (let i = 0; i < 10; i++) { // eslint-disable-line no-plusplus
          const result = bitwise.operators(operator, i, i);
          expect(result).to.equal(i);
        }
      });
    });

    context('or', () => {
      beforeEach(() => {
        operator = 'or';
      });

      it('returns the value when comparing the value to itself', () => {
        for (let i = 0; i < 10; i++) { // eslint-disable-line no-plusplus
          const result = bitwise.operators(operator, i, i);
          expect(result).to.equal(i);
        }
      });
    });
  });
});
