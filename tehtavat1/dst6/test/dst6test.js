const funcs = require('../dst6.js');
const expect = require('chai').expect;

describe('Testing dst6 -functions', () => {
  // testimerkkijonot
  const s1 = 'sananmuunnos';
  const s2 = 'saippuakivikauppias';
  const s3 = 'iso rikas sika sökösakissa kirosi';

  it('Should export functions', () => {
    expect(funcs.reverseString).to.be.a('Function');
    expect(funcs.isPalindrome).to.be.a('Function');
  });

  it('Function reverseString', () => {
    const rstring1 = funcs.reverseString(s1);
    expect(rstring1).equal('sonnuumnanas');
    const rstring2 = funcs.reverseString(s2);
    expect(rstring2).equal('saippuakivikauppias');
    const rstring3 = funcs.reverseString(s3);
    expect(rstring3).equal('isorik assikasökös akis sakir osi');
  });

  it('Function isPalindrome', () => {
    expect(funcs.isPalindrome(s1)).to.be.false;
    expect(funcs.isPalindrome(s2)).to.be.true;
    expect(funcs.isPalindrome(s3)).to.be.true;
  });
});
