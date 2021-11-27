/* eslint-disable new-cap */
const funcs = require('../dst7.js');
const expect = require('chai').expect;

describe('Testing dst7 -functions', () => {
  // taulukko josta luodaan testilista
  const testarr = ['item1', 'item2', 'item3'];

  it('Should export functions', () => {
    expect(funcs.listFromArray).to.be.a('Function');
    expect(funcs.insertToIndex).to.be.a('Function');
    expect(funcs.removeFromIndex).to.be.a('Function');
    expect(funcs.print).to.be.a('Function');
    expect(funcs.printReverse).to.be.a('Function');
  });

  it('Function listFromArray', () => {
    const testlist = funcs.listFromArray(testarr);
    // funcs.print(testlist);
    expect(testlist.Size()).to.equal(3);
    expect(testlist.Begin().Value()).to.equal('item1');
    expect(testlist.End().Value()).to.equal('item3');
  });

  it('Function insertToIndex', () => {
    const testlist = funcs.listFromArray(testarr);
    expect(funcs.insertToIndex(testlist, 3, 'item4')).to.be.true;
    expect(funcs.insertToIndex(testlist, -1, 'item5')).to.be.false;
    expect(funcs.insertToIndex(testlist, 10, 'item6')).to.be.false;
    expect(testlist.Find('item4')).to.exist;
    // funcs.print(testlist);
  });

  it('Function removeFromIndex', () => {
    const testlist = funcs.listFromArray(testarr);
    // funcs.print(testlist);
    expect(funcs.removeFromIndex(testlist, 2)).to.be.true;
    expect(funcs.removeFromIndex(testlist, -1)).to.be.false;
    expect(funcs.removeFromIndex(testlist, 10)).to.be.false;
    expect(testlist.Find('item3')).to.be.null;
  });
});
