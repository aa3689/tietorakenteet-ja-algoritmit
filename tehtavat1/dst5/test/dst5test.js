const funcs = require('../dst5.js');
const expect = require('chai').expect;

describe('Testing dst5 -functions', () => {
  // testijonot
  const arr1 = [2, 4, 9, 5, 6, 12, 7, 4, 6, 8];
  const q1 = funcs.makeQueue(arr1);

  it('Should export functions', () => {
    expect(funcs.makeQueue).to.be.a('Function');
    expect(funcs.checkQueue).to.be.a('Function');
    expect(funcs.clearQueue).to.be.a('Function');
  });

  it('Function makeQueue', () => {
    expect(q1.size()).equal(10);
    expect(q1.peek()).equal(2);
  });

  it('Function checkQueue', () => {
    const checked = funcs.checkQueue(q1, 10);
    expect(checked.size()).equal(5);
    expect(checked.peek()).equal(12);
  });

  it('Function clearQueue', () => {
    const arr2 = funcs.clearQueue(q1);
    expect(arr2.length).equal(5);
    expect(arr2[0]).equal(12);
    expect(arr2[4]).equal(8);
  });
});
