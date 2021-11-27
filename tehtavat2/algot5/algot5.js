/*
Toteuta algoritmi jolla etsit pisimmän yhteisen alimerkkijonon
kahdesta merkkijonosta. Tee se funktioon findLcsBrute(s1, s2).
*/

/*
Algoritmi on suurilla n:n eli pitkillä merkkijonoilla erittäin hidas,
koska ensinnäkin heti alussa tehdään kaksi tuplasilmukkaa.
Big O notaatio on suunnilleen tätä luokkaa: O(n*n + n*n + n*n + n)
*/

// Funktio, jolla haetaan kaikki merkkijonon alimerkkijonot taulukkoon
function getAllSubstrs(str) {
  // tyhjä taulukko, johon alimerkkijonot tulevat
  const result = [];
  for (let i = 0; i < str.length; i++) {
    // jos j = i + 2 niin yhden merkin alimerkkijonot jäävät pois
    // lyhyitä alimerkkijonoja voi karsia pois "varmoissa" tapauksissa
    for (let j = i + 1; j < str.length + 1; j++) {
      // slice viipaloi i:stä j:hin, mutta j ei tule mukaan
      const substr = str.slice(i, j);
      result.push(substr); // alimerkkijonotaulukko syntyy
    }
  }
  return result;
}

function findLcsBrute(s1, s2) {
  /*
  Taulukoista voisi tehdä setit, jotta niihin jää vain uniikkeja alkioita.
  Setti olisi siis parempi tietorakenne, mutta setin avulla tehty
  ratkaisukaan ei ole nopein mahdollinen.
  */

  // 1) Kerätään molemmista merkkijonoista kaikki alimerkkijonot kahteen taulukkoon.
  const s1subs = getAllSubstrs(s1);
  const s2subs = getAllSubstrs(s2);

  // 2) Vertaillaan kahdessa taulukossa olevia alimerkkijonoja ja poimitaan yhteiset uuteen taulukkoon.
  // Kahdesta taulukosta syntyy intersect-taulukko, jossa ovat yhteiset alimerkkijonot.
  // .filter() luo uuden taulukon, jonka alkiot "suodatetaan" argumenttina olevan
  // anonyymifunktion avulla.
  const intersect = s1subs.filter((element) => s2subs.includes(element));

  // 3) Etsitään taulukosta alkio, jossa on eniten merkkejä ja palautetaan se.
  // .reducen viimeinen argumentti eli tyhjä merkkijono on alkuarvo,
  // jonka paikalle tulee vertailun tulos eli pisin merkkijono
  const lcs = intersect.reduce((a, b) => (a.length > b.length ? a : b), '');
  return lcs;
}

// Funktio jolla tehdään pitkiä merkkijonoja nopeuden testausta varten.
// 'charset' sisältää merkit, joista merkkijono tehdään ja 'len' on sen pituus
function genString(charset, len) {
  let text = '';
  for (let i = 0; i < len; i++) {
    // rakennetaan merkkijono eli lisätään satunnaisia merkkejä charsetista
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
}

// const str1 = 'moi';
// const str2 = 'hoi';
const str3 = genString('ATGC', 100);
const str4 = genString('ATGC', 100);
//console.log(getAllSubstrs(str1));
const lcs = findLcsBrute(str3, str4);
console.log(lcs);

module.exports = { getAllSubstrs, findLcsBrute, genString };
