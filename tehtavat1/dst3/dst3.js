/*
Tee Set-tietorakenteet coderA, coderB ja coderC  joissa ovat koodarien osaamat kielet.
Laita setit taulukkoon coders. Tee taulukossa olevista seteistä uusi setti,
johon kokoat kaikki eri kielet mitä kyseiset kolme koodaria osaavat,
eli teet joukoista unionin. Unionista tutkit löytyykö yrityksestä Go -kielen osaajaa.
*/

const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

const coders = [coderA, coderB, coderC];

// Tehdään coders-taulukossa olevista seteistä unioni
function union(coders) {
  const unionset = new Set();
  // käydään läpi taulukot ja niiden sisällä olevien settien arvot
  coders.forEach((set) => {
    for (const element of set) {
      unionset.add(element);
    }
  });
  return unionset;
}

// Katsotaan unionista onko siellä tiettyä kieltä
function haveCodeSkill(coders, language) {
  // luodaan uusi set union(coders)-funktiolla
  const mySet = new Set(union(coders));
  // setistä katsotaan has-metodilla, onko siellä haluttua ohjelmointikieltä
  if (mySet.has(language)) {
    return true;
  } else {
    return false;
  }
}

console.log(union(coders));
console.log(haveCodeSkill(coders, ['Go']));

module.exports = { union, haveCodeSkill };
