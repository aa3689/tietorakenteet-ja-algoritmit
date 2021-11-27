/* Bongobongon kansantasavallan väestö on kasvanut vuosina 1960-2010 seuraavasti:

1960: 2 miljoonaa
1970: 4 miljoonaa
1980: 6 miljoonaa
1990: 10 miljoonaa
2000: 18 miljoonaa
2010: 33 miljoonaa

Etsi npmjs.com:sta valmis regressioalgoritmi jolla voit arvioida mikä on väkiluku
vuonna 2020, 2050 ja 2100 jos väestönkehitys jatkuu samanlaisena. Tee funktio joka ottaa
argumenttina vuosiluvun ja palauttaa väkiluvun.
*/

const PolynomialRegression = require('ml-regression-polynomial');

const x = [1960, 1970, 1980, 1990, 2000, 2010];
const y = [2, 4, 6, 10, 18, 33];
const degree = 3;

const polreg = new PolynomialRegression(x, y, degree);

// funktion parametreina vuosi, josta ennuste tehdään ja regressio
function prediction(year, reg) {
  const population = Math.round(reg.predict(year));
  return population;
}

console.log('Väkiluku vuonna 2020:');
console.log(prediction(2020, polreg) + ' miljoonaa');
console.log('Väkiluku vuonna 2050:');
console.log(prediction(2050, polreg) + ' miljoonaa');
console.log('Väkiluku vuonna 2100:');
console.log(prediction(2100, polreg) + ' miljoonaa');
