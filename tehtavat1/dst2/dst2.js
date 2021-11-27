/*
Tee kolme funktiota joiden avulla saat lopputulokseksi seuraavanlaisen mapin:
Map { 'ykauppa' => 26 }. Avain on sen kaupan nimi jossa hintojen summa on pienin
ja arvo on hintojen summa. Eli selvitämme mikä kauppa on halvin.
*/

const xkauppamap = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppamap = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppamap = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

function sum(shop) {
  let sum = 0; // kerätään summa tähän

  // Käydään arvot läpi for-of -rakenteella.
  // shop.values() on iteraattori, johon tulevat arvot yksi kerrallaan
  // ja ne menevät value-muuttujaan
  for (const value of shop.values()) {
    // vain numerot lasketaan summaan
    if (typeof value === 'number') {
      // numerot lisätään summaan
      sum += value;
    }
  }
  return sum;
}

// Tehdään uusi map, joka sisältää avaimina kauppojen nimet
// ja arvoina tuotteiden summat. Kolme pistettä on ns. spread-operaattori,
// joka kerää shops-taulukkoon kaikki keyn jälkeen tulevat argumentit
function createSumMap(key, ...shops) {
  // luodaan uusi map (sumMap), johon tulevat halutut tiedot
  const sumMap = new Map();
  // käydään shops-taulukossa olevat mapit läpi
  // ja luodaan niistä uusi map, jossa on halutut tiedot
  shops.forEach((shop) => {
    // avaimeksi tulee kaupan nimi
    const name = shop.get(key);
    // sumMap syntyy nimestä ja summasta, jotka laitetaan
    // sinne silmukassa yksi kerrallaan
    sumMap.set(name, sum(shop));
  });
  // kun silmukka on suoritettu, palautetaan valmis sumMap
  return sumMap;
}

// Tehdään mappi, jossa on avaimena kaupan nimi ja arvona summa,
// joka on pienin sumMap:n summista
function minValueMap(mapX) {
  // tehdään alkuarvo johon verrataan
  let minValue = Number.MAX_VALUE;
  // alustetaan kaupan nimi
  let minValueKey = '';

  // käytetään mapin forEachia
  mapX.forEach((value, key) => {
    // jos arvo on numero ja arvo on pienempi kuin aiempi pienin arvo
    if (typeof value === 'number' && value < minValue) {
      // asetetaan arvot minValue:lle ja minValueKey:lle
      minValue = value;
      minValueKey = key;
    }
  });
  // kun silmukka on suoritettu, luodaan uusi map
  // saaduista arvoista (minValueKey, minValue)
  const halvinKauppa = new Map([[minValueKey, minValue]]);
  // palautetaan uusi map
  return halvinKauppa;
}

const mySumMap = createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap);
const halvin = minValueMap(mySumMap);
console.log(halvin);

module.exports = { sum, createSumMap, minValueMap };
