/*
Toteuta yksinkertainen binäärihakupuu bst-js-kirjaston avulla.
Tee funktio createTree(root, values) jolla luot puun. Puun juuressa on alkio 10
ja puussa ovat alkiot: 2,6,23,1,12,21,5. Tulosta puu console.logilla ja kopioi
tuloste tiedostoon tuloste.txt. Tutki tulostetta klikkailemalla aaltosulkeita.
Millainen sen rakenne on? Piirrä binäärihakupuu merkkien avulla kuten bst-js:n
dokumentaatiossa on tehty. Voit piirtää puun käsin eli piirtoa varten ei tarvitse
tehdä funktiota. Suorita vielä puun kaikkien alkioiden leveyshaku ja syvyyshaku
kirjaston funktioilla breadthFirst ja depthFirst. Tulosta hakujen tulokset.
Mihin periaatteisiin haut perustuvat?
*/

const Node = require('bst-js');

const values = [2, 6, 23, 1, 12, 21, 5];

// Luodaan bst-puu
function createTree(root, values) {
  const tree = new Node(root);
  tree.insert(...values);
  return tree;
}

const bsttree = createTree(10, values);
console.log(bsttree);

console.log('Breadth-first search:');
bsttree.breadthFirst(function () {
  console.log(this.value);
});

console.log('Depth-first search:');
bsttree.depthFirst(function () {
  console.log(this.value);
});

// Katso tuloste.txt

module.exports = { createTree };
