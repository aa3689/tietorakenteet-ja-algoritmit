/*
Toteuta saman tuloksen tuottava algoritmi kuin edellisessä tehtävässä funktioon findLcs(s1, s2).
Tee se nyt hieman eri tavalla, hyödyntäen dynaamista algoritmin suunnittelua.
Käytä kaksiulotteista taulukkoa säilyttämään merkkijonojen vertailun tulokset.
*/

/*
Longest Common Substring
Aikavaativuus suunnilleen O(i*j + i*j) eli = O(n*m + n*m).
*/

function findLcs(s1, s2) {
  let lcslen = 0; // pisimmän yhteisen alimerkkijonon pituus eli lcs:n pituus
  let index = 0; // indeksi johon tallentuu lcs:n viimeinen merkki
  const lcsarr = [];

  for (let i = 0; i <= s1.length; i++) {
    lcsarr[i] = []; // luo matriisiin uuden rivin
    for (let j = 0; j <= s2.length; j++) {
      lcsarr[i][j] = 0; // täyttää rivin nollilla
    }
  }

  /*
  Käydään matriisi ja merkkijonot läpi ja suoritetaan merkkijonojen vertailu,
  jonka tulos laitetaan matriisiin. Jokaista s1:n alkiota vertaillaan
  vuorollaan kaikkiin s2:n alkioihin.
  */
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      // jos ei olla matriisin ekalla rivillä tai ekassa sarakkeessa
      // niin ei mennä vertailuun, koska tulisi virhe undefined-viittauksesta
      if (!(i === 0 || j === 0)) {
        // merkkien vertailu, jos merkit samat
        if (s1[i - 1] === s2[j - 1]) {
          // lisätään matriisin edellisen rivin edellisen alkion arvoon 1
          // ja sijoitetaan saatu arvo matriisin sille paikalle missää ollaan
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        }
        // Taulukon syntymisen vaiheet. Jokaista s1:n alkiota vertaillaan s2:n alkioihin
      }
      if (lcslen < lcsarr[i][j]) {
        lcslen = lcsarr[i][j]; // suurempi pituus sijoitetaan pisimmäksi
        index = j - 1; // s2-merkkijonon indeksi, johon lcs päättyy on yhtä pienempi kuin indeksi
      }
    }
  }
  let lcs = '';
  if (lcslen === 0) {
    return 'No common substring!';
  } else {
    // rakennetaan lcs silmukassa
    for (let i = index; i <= index + (lcslen - 1); i++) {
      lcs += s2[i - (lcslen - 1)];
    }
    return lcs;
  }
}

// Funktio jolla luodaan merkkijono
function genString(charset, len) {
  let text = '';
  for (let i = 0; i < len; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
}

const str1 = genString('ATGC', 10000);
const str2 = genString('ATGC', 10000);
//const lcs = findLcs('GTC', 'TC');
const lcs = findLcs(str1, str2);
console.log(lcs);

module.exports = { findLcs, genString };
