const collectFeedRec = require('../algot2.js');
const expect = require('chai').expect;

describe('Testing collectFeedRec', () => {
  it('Should return the correct string', (done) => {
    console.log('Anna merkit: m, o, i, #');
    const mj = collectFeedRec();
    expect(mj).to.eq('moi');
    done();
  }).timeout(30000);
});
