/*
Etsi webistä tietoa jostakin tietorakenteesta jota tällä kurssilla ei ole esitelty.
Selvitä onko se jonkin kurssilla esitellyn tietorakenteen muunnos?
Esitä sen JS-toteutus ja selvitä millaisissa käyttötarkoituksissa siitä voi olla hyötyä.
*/

// PRIORITY QUEUE
// https://github.com/datastructures-js/priority-queue

/*
Prioriteettijono (priority queue) on perinteisen jonon "laajennus".
Se on kuin normaali jono, mutta sillä erolla, että jonosta poistettavat
alkiot noudattavat tärkeysjärjestystä. Korkeimman tärkeysasteen omaava alkio
poistetaan jonosta ensin.

Käyttökohteita tälle ovat esim. verkkoliikenteen ja käyttöjärjestelmän prosessien hallinta
sekä jotkin algoritmit kuten "best-first search" ja "ROAM tringulation". Tyypillisesti
prioriteettijonon rakentamisessa käytetään kekoa. Esimerkin kirjasto hyödyntää juuri sitä.

MinPriorityQueue (MinHeap) = pienimmän arvon omaava alkio on tärkein
MaxPriorityQueue (MaxHeap) = korkeimman arvon omaava alkio on tärkein
*/

const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

// Alustetaan muuttujat
const numerojono = new MaxPriorityQueue();
const potilasjono = new MinPriorityQueue();

// .enqueue(element[, priority])
// lisää alkion jonoon käyttäen lukua tärkeysjärjestykseen
numerojono.enqueue(8);
numerojono.enqueue(22); // korkein
numerojono.enqueue(1);
numerojono.enqueue(-10); // matalin
potilasjono.enqueue('Potilas x', 1); // korkein
potilasjono.enqueue('Potilas y', 3);
potilasjono.enqueue('Potilas z', 4); // matalin
potilasjono.enqueue('Potilas w', 2);

//.front() palauttaa tärkeimmän alkion
console.log(numerojono.front()); // { priority: 22, element: 22 }
console.log(potilasjono.front()); // { priority: 1, element: 'Potilas x' }

//.back() palauttaa vähiten tärkeimmän alkion
console.log(numerojono.back()); // { priority: -10, element: -10 }
console.log(potilasjono.back()); // { priority: 4, element: 'Potilas z' }

// .dequeue() poistaa ja palauttaa tärkeimmän alkion
console.log(numerojono.dequeue()); // { priority: 22, element: 22 }
console.log(potilasjono.dequeue()); // { priority: 1, element: 'Potilas x' }

// .isEmpty() tarkistaa onko jono tyhjä
// .clear() poistaa kaikki alkiot jonosta
console.log(numerojono.isEmpty()); // false
numerojono.clear();
console.log(numerojono.isEmpty()); // true

// .size() palauttaa alkioiden määrän jonossa
console.log(numerojono.size()); // 0
console.log(potilasjono.size()); // 3

// .toArray() palauttaa taulukon järjestettynä tärkeysjärjestykseen
console.log(potilasjono.toArray());
/*
[
  { priority: 2, element: 'Potilas w' },
  { priority: 3, element: 'Potilas y' },
  { priority: 4, element: 'Potilas z' }
]
*/
