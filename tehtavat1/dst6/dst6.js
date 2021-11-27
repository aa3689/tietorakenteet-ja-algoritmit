/*
Toteuta pino-tietorakenteen (stack-lifo) avulla funktio, joka ottaa
argumentikseen merkkijonon ja palauttaa sen käännettynä väärinpäin.
*/
const Stack = require('stack-lifo');

// Funktio joka ottaa argumentikseen merkkijonon
// ja palauttaa sen käännettynä väärinpäin
function reverseString(str) {
  const stack = new Stack();
  // alustetaan muuttuja käännetylle merkkijonolle
  let rstr = '';
  // lisätään merkkijonon alkiot pinoon
  for (let i = 0; i < str.length; ++i) {
    stack.push(str[i]);
  }
  // poistetaan (.pop()) merkkijonon alkiot pinosta ja lisätään ne rstr-muuttujaan
  while (stack.size() > 0) {
    rstr += stack.pop();
  }
  return rstr; // palautetaan käännetty merkkijono
}

// Funktio joka ottaa argumentikseen merkkijonon
// ja tarkistaa onko se palindromi
function isPalindrome(str) {
  // poistetaan välilyönnit
  str = str.replace(/ /g, '');
  // otetaan alkuperäinen merkkijono talteen
  const og = str;
  // kutsutaan reverseString-funktiota,
  // argumenttina käännettävä merkkijono
  const rstr = reverseString(str);
  // jos alkuperäinen merkkijono täsmää käänettyyn,
  // palautetaan true eli kyseessä on palindromi
  if (og === rstr) {
    return true;
    // muutoin palautetaan false eli ei ole palindromi
  } else {
    return false;
  }
}

const rstr = reverseString('moikka kaikki');
console.log(rstr);

const palindrome = isPalindrome('saippuakauppias');
console.log(palindrome);

const palindrome2 = isPalindrome('mustakissa');
console.log(palindrome2);

module.exports = { reverseString, isPalindrome };
