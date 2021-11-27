/*
Kokeile tehtävän 8 ratkaisemista päättelypuun eli decision treen avulla.
Kommentoi millä tavalla tämä algoritmi eroaa logistisesta regressiosta. 
*/

/**
 * Päättelypuu kuuluu ohjatun / valvotun (supervised) oppimisen
 * menetelmään, jossa opetusaineiston avulla luodaan funktio,
 * jolla luokiteltava aineisto voidaan luokitella. Riittävän hyvällä
 * opetusdatalla algoritmi pystyy päättelemään, mihin luokkaan tuntematon
 * tapaus kuuluisi.
 *
 * Päättelypuun perusajatuksena on datasettien avulla luoda ns.
 * kyllä/ei-kysymyksiä ja jakaa datasettiä osiin niin kauan,
 * että jokainen datapiste kuuluu johonkin luokkaan.
 *
 * Yksinkertaistettuna se siis ottaa propertyn(esimerkiksi 'sex'),
 * luo siitä uuden solmun ja "kysyy" onko 'sex' 1 vai 2 ja tämän
 * perusteella jakaa aineiston uusiin haaroihin. Numeraalisissa
 * arvoissa se (mielestäni ainakin) laskee niiden keskiarvon ja
 * sen mukaan jakaa uusiin haaroihin. Esim. age <= 38 (385 / 10 = 38.5).
 *
 * Tätä jatketaan niin kauan ettei ole enää esitettäviä kysymyksiä.
 * Näin se ilmeisesti yksinkertaisuudessaan toimii. Tieteellisempää
 * selostusta en pysty antamaan, koska tilastotiede ei todellakaan
 * kuulu vahvimpiin osaamisalueisiini.
 *
 * Se on myös hyvä kysymys miten tämä eroaa logistisesta regressiosta,
 * koska logistinen regressio meni itsellä jo hieman yli ymmärryksen.
 * Tästä päättelypuusta sentään ymmärsin perusperiaatteen sen toiminnasta,
 * eli se on ehkä helpommin ymmärretävissä kuin log. reg., joten siinä
 * ainakin yksi ero, ja onhan tämän toiminnallisuutta myös helpompi
 * visualisoida.
 *
 * Lopputulos on myös ilmeisesti hieman eri. Päättelypuu käytännössä
 * päättää "tapahtuuko" jokin asia (onko se 0 vai 1), kun taas log. reg.
 * antaa ennusteen nollan ja yhden väliltä.
 */

const DecisionTree = require('decision-tree');

// Prepare training dataset
const training_data = [
  { age: 18, sex: 1, income: 10, will_order: false },
  { age: 20, sex: 2, income: 20, will_order: false },
  { age: 24, sex: 1, income: 30, will_order: true },
  { age: 30, sex: 2, income: 50, will_order: true },
  { age: 32, sex: 1, income: 50, will_order: false },
  { age: 40, sex: 2, income: 55, will_order: true },
  { age: 45, sex: 1, income: 20, will_order: true },
  { age: 51, sex: 2, income: 60, will_order: false },
  { age: 60, sex: 1, income: 65, will_order: true },
  { age: 65, sex: 2, income: 15, will_order: false },
];

// Prepare test dataset
const test_data = [
  { age: 20, sex: 2, income: 20, will_order: false },
  { age: 32, sex: 1, income: 50, will_order: false },
  { age: 40, sex: 2, income: 55, will_order: true },
  { age: 60, sex: 1, income: 65, will_order: true },
];

// Setup Target Class used for prediction
const class_name = 'will_order';

// Setup Features to be used by decision tree
const features = ['age', 'sex', 'income'];

// Create decision tree and train the model
const dt = new DecisionTree(class_name, features);
dt.train(training_data);

// Predict class label for an instance
const predicted_class = dt.predict({
  age: 45,
  sex: 1,
  income: 20,
});

// Evaluate model on a dataset
const accuracy = dt.evaluate(test_data);

// Create a decision tree from a previously trained model
const treeJson = dt.toJSON();
const preTrainedDecisionTree = new DecisionTree(treeJson);

console.log(predicted_class);
