/*
Tee edellisestä funktiosta toinen versio, collectFeedRec(str=''), jossa käytät rekursiota.
*/

const rl = require('readline-sync');

// str = '' on oletusparametri eli jos funktiolle
// ei ole kutsussa annettu jotain muuta argumenttia,
// sisään menee tyhjä merkkijono
function collectFeedRec(str = '') {
  const char = rl.question('Anna merkki: ');
  // Rekursion termination ja base case
  if (char === '#') {
    return str;
    // Lisätään merkki merkkijonoon ja kutsutaan funktiota itseään
  } else {
    str = str + char;
    return collectFeedRec(str);
  }
}

const mj = collectFeedRec();
console.log(mj);

module.exports = collectFeedRec;
