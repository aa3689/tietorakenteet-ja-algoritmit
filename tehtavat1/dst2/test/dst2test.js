const funcs = require('../dst2.js');
const expect = require('chai').expect;

describe('Testing dst2 -functions', () => {
  // testimapit
  const m1 = new Map([
    ['key1', 'x'],
    ['key2', 10],
    ['key3', 20],
  ]);
  const m2 = new Map([
    ['key1', 'y'],
    ['key2', 12],
    ['key3', 15],
  ]);

  it('Should export functions', () => {
    expect(funcs.sum).to.be.a('Function');
    expect(funcs.createSumMap).to.be.a('Function');
    expect(funcs.minValueMap).to.be.a('Function');
  });

  it('Function sum', () => {
    expect(funcs.sum(m1)).equal(30);
  });

  it('Function createSumMap', () => {
    const m = funcs.createSumMap('key1', m1, m2);
    expect(m.get('x')).equal(30);
    expect(m.get('y')).equal(27);
  });

  it('Function minValueMap', () => {
    const m = funcs.createSumMap('key1', m1, m2);
    const resultmap = funcs.minValueMap(m);
    expect(resultmap.size).equal(1);
    expect(resultmap.get('y')).equal(27);
  });
});
