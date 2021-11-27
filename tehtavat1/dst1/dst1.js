/*
Tee viisi funktiota jotka käsittelevät taulukossa olevia tikanheiton tuloksia.
Tee funktiot:
1) setScore(scores, newscore) lisää uuden tuloksen taulukkoon,
2) getScores(scores) palauttaa kaikki tulokset,
3) latest(scores) palauttaa viimeisimmän tuloksen,
4) highest(scores) palauttaa parhaan tuloksen,
5) topThree(scores) palauttaa kolme parasta tulosta
*/

// Lisää uuden tuloksen taulukon loppuun (.push())
function setScore(scores, newscore) {
  scores.push(newscore);
}

// Palauttaa tulokset
function getScores(scores) {
  return scores;
}

// Palauttaa taulukon viimeisimmän alkion
function latest(scores) {
  return scores[scores.length - 1];
}

// Palauttaa taulukon korkeimman luvun
function highest(scores) {
  return Math.max(...scores);
}

// Palauttaa taulukon kolme korkeinta lukua.
// Tekee ensin kopion alk.per. taulusta välttääkseen mutatoinnin.
// Järjestää käänt. suuruusjärjestykseen (.sort)
// ja palauttaa kolme ensimmäistä alkiota (.slice)
function topThree(scores) {
  const scoresclone = [...scores];
  const sorted = scoresclone.sort(function (a, b) {
    return b - a;
  });
  return sorted.slice(0, 3);
}

const scores = [2, 50, 33, 47, 15];

setScore(scores, 11);

console.log('Tulokset: ' + scores);
console.log('Korkein tulos: ' + highest(scores));
console.log('Kolme parasta: ' + topThree(scores));

module.exports = { setScore, getScores, latest, highest, topThree };
