const funcs = require('../dst1.js');
const expect = require('chai').expect;

describe('Testing dst1 -functions', () => {
  it('Should export functions', () => {
    expect(funcs.setScore).to.be.a('Function');
    expect(funcs.getScores).to.be.a('Function');
    expect(funcs.highest).to.be.a('Function');
    expect(funcs.latest).to.be.a('Function');
    expect(funcs.topThree).to.be.a('Function');
  });

  //testarrays
  const scores1 = [50, 10, 20, 30];
  const scores2 = [14, 45, 23, 8];

  it('Function setScore', () => {
    funcs.setScore(scores1, 15);
    expect(scores1).deep.equal([50, 10, 20, 30, 15]);
    funcs.setScore(scores2, 5);
    expect(scores2).deep.equal([14, 45, 23, 8, 5]);
  });

  it('Function getScores', () => {
    expect(funcs.getScores(scores1)).deep.equal([50, 10, 20, 30, 15]);
    expect(funcs.getScores(scores2)).deep.equal([14, 45, 23, 8, 5]);
  });

  it('Function latest', () => {
    expect(funcs.latest(scores1)).equal(15);
    expect(funcs.latest(scores2)).equal(5);
  });

  it('Function highest', () => {
    expect(funcs.highest(scores1)).equal(50);
    expect(funcs.highest(scores2)).equal(45);
  });

  it('Function topThree', () => {
    expect(funcs.topThree(scores1)).deep.equal([50, 30, 20]);
    expect(funcs.topThree(scores2)).deep.equal([45, 23, 14]);
  });
});
