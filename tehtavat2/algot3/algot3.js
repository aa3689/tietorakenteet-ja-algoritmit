/*
Toteuta algoritmi jolla etsit taulukossa useimmin esiintyvän alkion.
Voit olettaa että alkiot ovat numeroita. Tee algoritmi funktioon findMostFreqBrute(arr).
Käytä brute force -menetelmää eli vertaa kaikkien alkioiden arvoja toisiinsa
*/

/*
Etsitään taulukosta useimmin esiintyvä alkio
"raa'alla voimalla" eli ei välitetä mitään siitä,
kuinka paljon aikaa (ja muistia) kuluu.

Kun taulukko käydään läpi sisäkkäisillä silmukoilla,
aikavaatimus on O(n*n). Parilla pikku korjauksella
(found = 1 ja let j = i + 1) aikavaativuutta saadaan
pienennettyä arvoon O(n*n/2). Tämän likiarvo on kuitenkin O(n*n).
*/

function findMostFreqBrute(arr) {
  let max = 1; // suurin samojen alkioiden lkm kaikilla kierroksilla
  let found = 1; // yhdellä kierroksella löydetty samojen alkioiden lkm
  let mostf; // useimmin esiintyvän alkion arvo

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // vertaillaan onko alkiot samat
      if (arr[i] === arr[j]) {
        found++; // kierroksella löytyi samat alkiot
      }
      // verrataan kierroksella löydettyjä samoja alkioita
      // aikaisemmilla kierroksilla löydettyihin
      if (max < found) {
        max = found;
        mostf = arr[i]; // otetaan talteen useimmin esiintyvän alkion arvo
      }
    }
    found = 1; // asetetaan found takaisin yhteen, kun j-kierros on tehty
  }
  return mostf;
}

// Luodaan muistiin taulukko, jossa on n kappaletta
// erilaisia numeroita satunnaisesti väliltä 1-9.
function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    // arvonta
    const rand = Math.floor(Math.random() * 9 + 1);
    // pushaus taulukkoon
    arr.push(rand);
  }
  return arr;
}

const arr1 = [2, 1, 6, 3, 3, 9, 7, 3, 2, 1];
//const arr2 = createNumArr(100000);

const mf = findMostFreqBrute(arr1);
console.log(mf);

module.exports = { findMostFreqBrute, createNumArr };
