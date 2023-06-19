// const assert = require('assert');
 const chai = require('chai');
 const { add } = require('./app');
 const { multiply } = require('./app');
 const { subtract } = require('./app');
 const { findMax } = require('./app');
 const { reverseString } = require('./app');

// ADDITION TESTING
describe('Application can perform addition', () => {it('should add numbers', () => {
    chai.expect(5 + 5).to.be.equal(10);
});
});


//MULTIPLICATION TESTING
describe('Application can perform multiplication', () => {it('should multiply numbers', () => {
    chai.expect(5 * 5).to.be.equal(25);
});
});

//SUBTRACTION TESTING
describe('Application can perform subtraction', () => {
  it('should be able to subtract negative numbers from positive numbers', () => {
    chai.expect(subtract(10, -5)).to.be.equal(15);
  });
  
  it('should be able to subtract two positive numbers', () => {
    chai.expect(subtract(10, 5)).to.be.equal(5);
  });

  it('should be able to subtract 2 negative numbers', () => {
    chai.expect(subtract(-10, -5)).to.be.equal(-5);
  });

  it('should subtract a positive number from zero correctly', () => {
    chai.expect(subtract(0, 5)).to.be.equal(-5);
  });

  it('should be able to subtract zero from a positive number too', () => {
    chai.expect(subtract(10, 0)).to.be.equal(10);
  });

});


//FINDMAX FUNCTION TESTING

describe('findMax function', () => {
  it('should find the maximum value in any array', () => {
    chai.expect(findMax([1, 5, 3, 9, 2])).to.equal(9);
  });

  it('should return undefined for any empty array', () => {
    chai.expect(findMax([])).to.be.undefined;
  });

  it('should find the maximum value in an array even with negative numbers', () => {
    chai.expect(findMax([-5, -2, -10, -1])).to.equal(-1);
  });
});

//REVERSE A STRING TESTING

describe('reverseString function', () => {
  it('should reverse a string correctly', () => {
    chai.expect(reverseString('hello')).to.equal('olleh');
  });

  it('should return an empty string for an empty input', () => {
    chai.expect(reverseString('')).to.equal('');
  });

  it('should preserve the order of characters in a palindrome string', () => {
    chai.expect(reverseString('level')).to.equal('level');
  });
});

