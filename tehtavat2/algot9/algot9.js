/*
Kokeile roskapostin havaitsemista Bayesin naiivin klassifikaation avulla.
Käytä valmista algoritmia: bayes-classifier, jota harjoitat normaalilla postilla ja roskapostilla.
Tutki algoritmin lähdekoodista ja web-lähteistä kuinka algoritmi pääpiirteissään toimii
ja kirjoita kommentiksi sen toiminnan kuvaus. Miksi algoritmi on naiivi?
*/

/**
 * Luokitinta opetetaan syöttämällä sille opetusdataa.
 * Tässä tapauksessa opetusdata on kuvitteelliset viestit
 * (positiveDocuments ja negativeDocuments),
 * joissa viestien sisältämät sanat ovat havaintoja.
 *
 * Algoritmi sisältää funktioita, joissa se korvaa mm. peräkkäin
 * esiintyviä konsonatteja / vokaaleja tietyllä kirjaimella
 * (function categorizeGroups), yksittäisia konsonantteja / vokaaleja
 * tietyllä kirjaimella (function categorizeChars) tai muita toistuvuuksia
 * (pattern) sanoissa (function attemptReplace). Tämä tehdään todennäköisesti
 * tehokkuuden parantamiseksi.
 *
 * Lisäksi alogritmi ajaa sanat Porter Stemming -algoritmin lävitse.
 * Tämä algoritmi poistaa englannin kielen sanoista yleisimmät morfologit
 * (muoto-opit) ja taivutuspäätteet. Lisäksi löytyy myös lista yleisimmistä
 * sanoista, joita ei huomioida analysoinnissa (Tokenizer.stopwords).
 *
 * Algoritmi on naiivi, koska oletamme havaintojen eli sanojen
 * olevan toisistaan ehdollisesti riippumattomia. Tällä tarkoitetaan esim.
 * sitä, ettei sanojen järjestyksellä ole merkistystä. Kunkin sanan vaikutus
 * arvioon viestin luokituksesta on siis riippumaton muista viestin sanoista.
 */

// Kts. https://github.com/miguelmota/bayes-classifier/blob/master/dist/bayes-classifier.js
const BayesClassifier = require('bayes-classifier');

// Luodaan uusi luokitin
const classifier = new BayesClassifier();

// Positiiviset viestit (ei-roskapostia)
const positiveDocuments = [
  `I love tacos.`,
  `Dude, that burrito was epic!`,
  `Holy cow, these nachos are so good and tasty.`,
  `I am drooling over the awesome bean and cheese quesadillas.`,
];

// Negatiiviset viestit (roskapostia)
const negativeDocuments = [
  `Gross, worst taco ever.`,
  `The buritos gave me horrible diarrhea.`,
  `I'm going to puke if I eat another bad nacho.`,
  `I'd rather die than eat those nasty enchiladas.`,
];

// Lisätään viestit luokittimeen
classifier.addDocuments(positiveDocuments, `positive`);
classifier.addDocuments(negativeDocuments, `negative`);

// Kutsutaan opetusmetodia. En ole 100 % varma miten tämä toimii,
// mutta ilmeisesti lisää vain yksinkertaisesti jokaisen sanan sille
// kuuluvaan luokkaan (positive tai negative)
classifier.train();

// Haetaan annettujen viestien luokitus,
// classify-metodi käyttää getClassifications-metodia
console.log(classifier.classify(`I heard the mexican restaurant is great!`)); // "positive"
console.log(classifier.classify(`I don't want to eat there again.`)); // "negative"
console.log(classifier.classify(`The torta is epicly bad.`)); // "negative"
console.log(classifier.classify(`The torta is tasty.`)); // "positive"

// Haetaan annetun merkkijonon numeraalinen arvio. Sanoja 'are', 'the' ja 'of'
// ei huomoida analysoinnissa. En tiedä miten se tuon lukeman laskee, mutta valistunut
// arvaukseni olisi, että sana 'burrito' esiintyy kerran positiivisessa testidatassa
// ja sanan 'life' se mieltää positiiviseksi niin tästä tulee value 0.2.
// Sanan 'meaning' se voisi mieltää väärin sanaksi 'mean' (ilkeä) ja luulla sitä
// negatiiviseksi, joten negative value olisi 0.1
console.log(classifier.getClassifications(`Burritos are the meaning of life.`));
/*
 [ { label: 'positive', value: 0.22222222222222224 },
   { label: 'negative', value: 0.11111111111111112 } ]
*/
