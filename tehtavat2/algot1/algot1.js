/*
Toteuta funktio collectFeed() joka kokoaa näppäimistöltä syöttämiäsi merkkejä
merkkijonoon niin kauan kunnes syötät lopetusmerkin joka on #.
Lopuksi merkkijono palautetaan, mutta ilman lopetusmerkkiä.
*/

const rl = require('readline-sync');

function collectFeed() {
  let char; // merkkimuuttujan alustus
  let str = ''; // merkkijonon alustus

  while (true) {
    char = rl.question('Anna merkki: ');
    if (char !== '#') {
      str = str + char; // kasvatetaan merkkijonoa
    } else {
      break; // mennään ulos while-silmukasta
    }
  }
  return str;
}

const mj = collectFeed();
console.log(mj);

module.exports = collectFeed;
