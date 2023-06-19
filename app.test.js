// const assert = require('assert');
 const chai = require('chai');
 const { add } = require('./app');
 const { multiply } = require('./app');
 const { subtract } = require('./app');

describe('Application can perform addition', () => {it('should add numbers', () => {
    //assert.equal(2 + 5, 8, "Addition wrong");
    chai.expect(5 + 5).to.be.equal(10);
});
});

describe('Application can perform multiplication', () => {it('should multiply numbers', () => {
    //assert.equal(2 + 5, 8, "multiplication wrong");
    chai.expect(5 * 5).to.be.equal(25);
});
});

describe('Application can perform subtraction', () => {it('should subtract numbers', () => {
    //assert.equal(2 + 5, 8, "subtraction wrong");
    chai.expect(10 - 5).to.be.equal(5);
});
});






// GPT CODE


const chai = require('chai');
const { add, multiply, subtract } = require('./app');

describe('Application can perform addition', () => {
  it('should add numbers correctly', () => {
    chai.expect(add(5, 5)).to.be.equal(10);
  });
});

describe('Application can perform multiplication', () => {
  it('should multiply numbers correctly', () => {
    chai.expect(multiply(5, 5)).to.be.equal(25);
  });
});

describe('Application can perform subtraction', () => {
  it('should subtract two positive numbers correctly', () => {
    chai.expect(subtract(10, 5)).to.be.equal(5);
  });

  it('should subtract a positive number from zero correctly', () => {
    chai.expect(subtract(0, 5)).to.be.equal(-5);
  });

  it('should subtract a negative number from a positive number correctly', () => {
    chai.expect(subtract(10, -5)).to.be.equal(15);
  });

  it('should subtract zero from a positive number correctly', () => {
    chai.expect(subtract(10, 0)).to.be.equal(10);
  });

  it('should subtract zero from zero correctly', () => {
    chai.expect(subtract(0, 0)).to.be.equal(0);
  });

  it('should subtract negative numbers correctly', () => {
    chai.expect(subtract(-10, -5)).to.be.equal(-5);
  });
});


