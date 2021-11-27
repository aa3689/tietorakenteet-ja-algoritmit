/*
Tee kolme funktiota joissa käytetään jono -tietorakennetta (queue-fifo):
1) makeQueue(arr) luo jonon taulukosta ja palauttaa sen.
2) checkQueue(myqueue, stopper) purkaa jonosta alkioita niin kauan
kunnes vastaan tulee stopper -alkio. Se palauttaa jäljelle jäävän jonon,
jossa stopper -alkio on ensimmäisenä.
3) clearQueue(queue) joka tyhjentää jäljelle jääneen jonon, laittaa alkiot
taulukkoon ja palauttaa taulukon.
*/

// Otetaan queue-fifo-niminen npm-kirjasto käyttöön
const Queue = require('queue-fifo');

// Luo jonon taulukosta ja palauttaa sen
function makeQueue(array) {
  // luo tyhjän jonon
  const myqueue = new Queue();
  // ottaa taulukosta alkiot ja laittaa ne jonoon
  array.forEach((element) => {
    myqueue.enqueue(element);
  });
  return myqueue;
}

// Purkaa jonosta alkioita kunnes vastaan tulee stopper-alkio
function checkQueue(myqueue, stopper) {
  while (true) {
    // kurkataan alkion arvo ja otetaan se talteen
    const peek = myqueue.peek();
    // jos arvo on sama tai suurempi kuin stopperin arvo,
    // lopetetaan suoritus ja siirrytään returniin
    if (peek >= stopper) {
      break;
      // muutoin poistetaan ensimmäinen alkio jonosta
    } else {
      myqueue.dequeue();
    }
  }
  // palautetaan katkaistu jono, jossa on ekana stopper-alkio
  return myqueue;
}

// Tyhjentää jäljelle jääneen jonon, laittaa alkiot taulukkoon ja palauttaa taulukon
function clearQueue(queue) {
  // luodaan tyhjä taulukko
  const array = [];
  for (let i = 0; i < queue.size(); ) {
    // laitetaan alkio taulukkoon (.push())
    array.push(queue.dequeue());
  }
  // palautetaan taulukko
  return array;
}

const queue1 = makeQueue([2, 4, 9, 5, 6, 12, 7, 4, 6, 8]);
console.log(queue1);

const testCheckQueue = checkQueue(queue1, 10);
console.log(testCheckQueue);

const testClearQueue = clearQueue(queue1);
console.log(testClearQueue);

module.exports = { makeQueue, checkQueue, clearQueue };
