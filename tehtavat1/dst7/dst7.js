/*
Toteuta "virtuaalinen musiikkisoitin" linkitetyn listan avulla.
Käytä simple-double-linked-list -kirjastoa ja luo lista, jossa on
neljä musiikkikappaletta aakkosjärjestyksessä esittäjän perusteella.

Tee funktiot:
1) listFromArray(arr) joka luo listan taulukon alkioista,
2) print(list) joka tulostaa listan alkiot allekkain,
3) printReverse(list) joka tulostaa listan alkiot allekkain käänteisessä järjestyksessä,
4) insertToIndex(list, index, item) jolla lisäät alkion listassa paikkaan,
jotka on numeroitu alusta lähtien 0, 1, 2 ...jne.,
5) removeFromIndex(list, index) jolla poistat alkion listasta.
*/

/* eslint-disable new-cap */
const L = require('simple-double-linked-list');

const track1 = 'Dire Straits - Sultans of Swing';
const track2 = 'Rainbow - The Temple of the King';
const track3 = 'Helloween - I Want Out';
const track4 = 'Black Sabbath - Children of the Grave';
const track5 = 'Deep Purple - Perfect Strangers';

const array = [track1, track2, track3, track4, track5];

// Ottaa sisään taulukon, jossa on alkioita
// jotka lisätään listaan AddFront()-metodilla
function listFromArray(arr) {
  const list = new L.List();
  arr.forEach((element) => {
    list.AddFront(element);
  });
  return list;
}

// Tulostaa listan biiseistä alk. per. järjestyksessä
function print(list) {
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    console.log(item.Value());
  }
}

// Tulostaa listan biiseistä käännetyssä järjestyksessä
function printReverse(list) {
  for (const item = list.End(); !item.IsAtEnd(); item.Previous()) {
    console.log(item.Value());
  }
}

/**
 * insertToIndex lisää alkioita listaan
 * @param {object} list - lista johon lisätään
 * @param {number} index  - paikka johon lisätään
 * @param {*} item  - alkio joka lisätään
 * @return {boolean}
 */
function insertToIndex(list, index, item) {
  // vain alkioiden perään voi lisätä uusia alkioita
  if (index < 0 || index > list.Size()) {
    return false;
  }
  // asetetaan iteraattori alkuun
  const iterator = list.Begin();
  // siirrytään lisäyspaikkaan
  // iteraattori siiretään lisäystä edeltävän alkion kohdalle,
  // koska käytetään InsertAfter() -metodia
  for (let i = 0; i < index - 1; i++) {
    iterator.Next();
  }
  list.InsertAfter(item, iterator);
  return true;
}

/**
 * removeFromIndex-metodi poistaa alkioita listasta
 * @param {object} list - lista josta poistetaan
 * @param {number} index - paikka josta poistetaan
 * @return {boolean}
 */
function removeFromIndex(list, index) {
  if (index < 0 || index > list.Size()) {
    return false;
  }
  const iterator = list.Begin();
  for (let i = 0; i < index; i++) {
    iterator.Next();
  }
  list.Remove(iterator);
  return true;
}

console.log('Alkuperäinen lista:');
const tracklist = listFromArray(array);
print(tracklist);

console.log('');

console.log('Lisätään biisi indexiin viisi:');
const track6 = 'Eagles - Hotel California';
insertToIndex(tracklist, 5, track6);
print(tracklist);

console.log('');

console.log('Poistetaan biisi indexistä kaksi:');
removeFromIndex(tracklist, 2);
print(tracklist);

console.log('');

console.log('Käännetty lista:');
printReverse(tracklist);

module.exports = {
  listFromArray,
  print,
  printReverse,
  insertToIndex,
  removeFromIndex,
};
