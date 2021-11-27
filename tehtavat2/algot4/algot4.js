/*
Toteuta saman tuloksen tuottava algoritmi kuin edellisessä tehtävässä funktioon
findMostFreq(arr), mutta nyt dynaamisella menetelmällä käyttäen apuna Map -tietorakennetta
*/

/*
Periaatteena on luoda väliaikainen varastotietorakenne (tässä map eli hajautustaulu) jota
hyödynnetään lopputuloksen selvittämisessä niin, että sen ansiosta voidaan välttää turhaa
toistoa, jota syntyy kun taulukko käydään läpi kaksi kertaa.
Kyseessä on siis dynaamisen ohjelmoinnin periaate.

Aikavaativuus on paljon pienempi O(n), koska taulukko käydään läpi vain kerran
ja mapista haku on aikavaativuudeltaan hyvin pieni.
*/

function findMostFreq(arr) {
  // 1) Luo tyhjä Map-tietorakenne
  const map = new Map();
  // 2) Käy silmukalla taulukko läpi ja laita läpikäytävä alkio muuttujaan key (mapin avain)
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    // 3) Tutki samassa silmukassa, että jos Mapissa ei jo ole avainta key,
    // luodaan mappiin uusi avain-arvo -pari "key, 1" eli asetetaan avaimen arvoksi 1.
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      // Muuten mapissa on jo sama avain jonka kohdalla ollaan. Tällöin otetaan avaimen arvo,
      // kasvatetaan sitä yhdellä ja laitetaan uusi arvo Mappiin.
      let value = map.get(key);
      value++;
      map.set(key, value);
    }
  }
  // 4) Kun Map-tietorakenne, jossa ovat avaimina alkiot ja arvoina niiden lukumäärät, on valmis,
  // haetaan Mapista suurin arvo ja sitä vastaava avain joka palautetaan.
  const maxvalue = Math.max(...map.values());
  for (const [key, value] of map.entries()) {
    if (value === maxvalue) {
      return key;
    }
  }
}

/*
Luodaan muistiin taulukko, jossa on n kpl
erilaisia numeroita satunnaisesti väliltä 1-9.
*/

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

const mf = findMostFreq(arr1);
console.log(mf);

module.exports = { findMostFreq, createNumArr };
