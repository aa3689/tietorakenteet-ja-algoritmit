/*
Toteuta graph-data-structure -kirjastolla tässä kuvassa esitetty verkko.
1) Tee values -taulukko joka sisältää taulukoita joissa on jokaisessa kolme alkiota:
alkusolmu, loppusolmu ja niiden välinen etäisyys.
2) Tee funktio createGraph(values) jolla luot kaksiulotteisesta taulukosta verkon
ja palautat sen.
3) Tee funktio shortestDist(graph, x, y) jolla palautat pienimmän mahdollisen etäisyyden
verkon graph solmujen x ja y välillä. Funktio on hyvin helppo toteuttaa kirjaston
valmiin metodin ja propertyn avulla.
4) Tulosta verkko serialize() -metodilla.
5) Suorita verkolle topologicalSort() -metodi ja tulosta sen lopputulos.
Kirjoita kommenttiin miksi topologinen lajittelu tuottaa saamasi lopputuloksen.
6) Tulosta lyhin etäisyys solmujen 'a' ja 'e' välillä.
*/
/* eslint-disable new-cap */

const Graph = require('graph-data-structure');

const values = [
  ['a', 'b', 7],
  ['a', 'c', 9],
  ['a', 'f', 14],
  ['b', 'c', 10],
  ['b', 'd', 15],
  ['c', 'd', 11],
  ['c', 'f', 2],
  ['d', 'e', 6],
  ['f', 'e', 9],
];

// Lisätään kaari (egde) solmusta (node) u solmuun v ja palautetaan verkko (graph).
// (graph.addEdge(u, v[,weight]))
function createGraph(values) {
  const graph = Graph();
  values.forEach((element) => {
    graph.addEdge(...element);
  });
  return graph;
}

// Etsitään pienin mahdollinen etäisyys solmujen x ja y välillä,
// käyttää hyväkseen Dijkstran algoritmia.
// (graph.shortestPath(sourceNode, destinationNode))
function shortestDist(graph, x, y) {
  const path = graph.shortestPath(x, y);
  return path.weight;
}

console.log('Serialisoitu verkko:');
const mygraph = createGraph(values);
console.log(mygraph.serialize());

/*
Topologisessa lajittelussa ei voida mennä solmuun, johon tulee useampi kaari,
jos näissä solmuissa joista kaaret tulevat, ei ole vielä käyty. Tehtävän esimerkissä
on siis pakko mennä ensin solmusta a solmuun b, koska se on ainoa a-solmun naapuri,
johon tulee vain yksi kaari.

Seuraavan on oltava solmu c, koska solmuun d tulee kaari c:stä emmekä voi mennä d:hen
ennen kuin olemme käyneet c:ssä. Solmun c jälkeen menemme solmuun f, johon tulevat kaaret
a:sta ja c:stä, mutta koska olemme käyneet jo a:ssa niin tämä ei haittaa.

Solmusta c olisi voitu mennä myös solmuun d, mutta koska solmuilla c-f oli piemenpi
painoarvo kuin solmuilla c-d (2 vs 11) niin algoritmi valitsi solmun f.

Lopuksi menimme solmuun d ja siitä solmuun e.
*/
console.log('Topologinen lajittelu:');
console.log(mygraph.topologicalSort());

console.log();

console.log('Lyhyin etäisyys a-e:');
const dist = shortestDist(mygraph, 'a', 'e');
console.log(dist);

module.exports = { createGraph, shortestDist };
