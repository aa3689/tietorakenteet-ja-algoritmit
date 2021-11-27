const funcs = require('../dst8.js');
const expect = require('chai').expect;

describe('Testing dst8 -functions', () => {
  // taulukko josta luodaan testilista
  const testarr = [
    ['a', 'b', 3],
    ['a', 'd', 2],
    ['b', 'c', 4],
    ['d', 'c', 6],
  ];

  it('Should export functions', () => {
    expect(funcs.createGraph).to.be.a('Function');
    expect(funcs.shortestDist).to.be.a('Function');
  });

  it('Function createGraph', () => {
    const testgraph = funcs.createGraph(testarr);
    expect(testgraph).to.be.an('Object');
    expect(testgraph.topologicalSort()).to.deep.equal(['a', 'd', 'b', 'c']);
  });

  it('Function shortestDist', () => {
    const testgraph = funcs.createGraph(testarr);
    expect(funcs.shortestDist(testgraph, 'a', 'c')).to.equal(7);
  });
});
