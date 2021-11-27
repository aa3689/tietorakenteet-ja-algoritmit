/*
Toteuta kolmen muuttujan logistinen regressio. Henkilöistä on saatavilla seuraavanlaista harjoitusdataa:
ikä, sukupuoli, vuositulot, onko ostanut hilavitkuttimen vai ei. Henkilön ominaisuuksien perusteella
ennustat ostokäyttäytymistä eli todennäköisyyttä sille ostaako hän hilavitkuttimen vai ei.
*/

/*
 * Logistinen regressio poikkeaa lineaarisesta regressiosta siten, että
 * selitettävän muuttujan arvo on todennäköisyys sille, että jokin tapahtuma tapahtuu
 * asteikolla 0-1. Logistista regressiota käytetäänkin koneoppimisessa laskemaan
 * todennäköisyyttä. Logistisen regression kaava on y = 1/1+e^-(a + b*x), jossa
 * a on vakio ja b kulmakerroin kuten lineaarisessa regressiossa. Näiden arvot
 * lasketaan harjoitusdatan avulla.
 *
 * Seuraavassa esimerkissä logistisen regression harjoittaminen on tehty valmiin
 * kirjaston (js-regression) avulla. Harjoitusdatasta saadaan vakio ja kulmakerroin
 * joiden avulla voidaan laskea selitettävän muuttujan y arvoja. Harjoitusdatan määrän
 * lisääntyessä ennustus tarkentuu. Esimerkissä pyritään ennustamaan tilaako tietyn
 * ikäinen henkilö paperille painettua sanomalehteä vai ei.
 *
 * Logistisen regression kuvaaja on sigmoidinen s-kirjainta muistuttava käyrä.
 * Seuraavalla sivulla voidaan piirtää käyrä harjoitusdatan muuttujien avulla:
 * http://stats.blue/Stats_Suite/logistic_regression_calculator.html
 */
const jsregression = require('js-regression'); // js-regression -kirjastomoduuli

/*
TrainingData on on tunnettua (hatusta vedettyä) dataa siitä tilaako tietyn
ikäinen henkilö paperille painettua sanomalehteä: 0==ei, 1==kyllä.
Dataa on esimerkissä vain todella vähän.
*/
const trainingData = [
  [18, 1, 10, 0],
  [20, 2, 20, 0],
  [24, 1, 30, 1],
  [30, 2, 50, 1],
  [32, 1, 50, 0],
  [40, 2, 55, 1],
  [45, 1, 20, 1],
  [51, 2, 60, 0],
  [60, 1, 65, 1],
  [65, 2, 15, 0],
];

/*
logReg -funktio tuottaa logistisen regressiomallin. Mallin tuottava algoritmi on
melko monimutkainen, joten yksinkertaistamisen vuoksi on käytetty valmista kirjastoa.
Parametrit a,l ja i vaikuttavat algoritmin tehokkuuteen: tarkkuus vs. nopeus. Niiden
arvoja säädetään riippuen datan määrästä.
*/

function logReg(a, l, i) {
  // regressio-olio logistic syntyy kirjaston algoritmilla
  const logistic = new jsregression.LogisticRegression({
    alpha: a,
    lambda: l,
    iterations: i,
  });

  // Harjoitetaan logistista regressiota harjoitusdatalla
  const model = logistic.fit(trainingData);
  return model; // palautetaan harjoitettu malli
}
// Prediction saa parametreikseen harjoitetun mallin ja selittävät muuttujat
function prediction(model, x1, x2, x3) {
  // console.log(model);
  // harjoitetusta mallista saadaan vakio ja kulmakerroin
  const a = model.theta[0]; // vakio
  const b1 = model.theta[1]; // kulmakerroin1
  const b2 = model.theta[2]; // kulmakerroin2
  const b3 = model.theta[3]; // kulmakerroin3
  // lasketaan todennäköisyys logistisen regression kaavalla
  const probability = 1 / (1 + Math.exp(-(a + b1 * x1 + b2 * x2 + b3 * x3)));
  return probability;
}

const age = 45;
const sex = 1;
const income = 20;
const model = logReg(0.001, 0, 1000);
const proba = prediction(model, age, sex, income);

console.log(proba.toFixed(2));
