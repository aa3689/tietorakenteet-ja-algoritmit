const funcs = require('../dst9.js');
const expect = require('chai').expect;

describe('Testing dst9 -function', () => {
  const testarr = [2, 6, 23, 1, 12, 21, 5];

  it('Should export functions', () => {
    expect(funcs.createTree).to.be.a('Function');
  });

  it('Function createTree', () => {
    const testtree = funcs.createTree(10, testarr);
    expect(testtree.height()).to.equal(3);
    expect(testtree.depth(1)).to.equal(2);
  });
});
