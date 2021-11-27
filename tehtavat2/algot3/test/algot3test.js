const funcs = require('../algot3.js');
const expect = require('chai').expect;

describe('Testing algot3', () => {
  // Testitaulukot
  const arr1 = [1, 2, 3, 1, 3, 2, 2, 3, 4, 3];
  const arr2 = [10, 2, 3, 10, 3, 2, 10, 3, 4, 10];

  it('Should export functions', () => {
    expect(funcs.findMostFreqBrute).to.be.a('Function');
    expect(funcs.createNumArr).to.be.a('Function');
  });

  it('Function createNumArr', () => {
    const arr = funcs.createNumArr(100);
    expect(arr.length).equal(100);
    expect(arr[0]).gt(0);
    expect(arr[0]).lt(10);
    expect(arr[99]).gt(0);
    expect(arr[99]).lt(10);
  });

  it('Function findMostFreqBrute', () => {
    const mf1 = funcs.findMostFreqBrute(arr1);
    const mf2 = funcs.findMostFreqBrute(arr2);
    expect(mf1).equal(3);
    expect(mf2).equal(10);
  });
});
