const funcs = require('../dst3.js');
const expect = require('chai').expect;

describe('Testing dst3 -functions', () => {
  // testisetit
  const s1 = new Set([1, 3]);
  const s2 = new Set([1, 2]);
  const sets = [s1, s2];

  it('Should export functions', () => {
    expect(funcs.union).to.be.a('Function');
    expect(funcs.haveCodeSkill).to.be.a('Function');
  });

  it('Function union', () => {
    const u = funcs.union(sets);
    expect(u.size).equal(3);
    expect(u.has(1)).to.be.true;
    expect(u.has(2)).to.be.true;
    expect(u.has(3)).to.be.true;
  });

  it('Function haveCodeSkill', () => {
    const h = funcs.haveCodeSkill(sets, 3);
    expect(h).to.be.true;
  });
});
