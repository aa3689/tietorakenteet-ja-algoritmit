const collectFeed = require('../algot1.js');
const expect = require('chai').expect;

describe('Testing collectFeed', () => {
  it('Should return the correct string', (done) => {
    console.log('Anna merkit: m, o, i, #');
    const mj = collectFeed();
    expect(mj).to.eq('moi');
    done();
  }).timeout(30000);
});
