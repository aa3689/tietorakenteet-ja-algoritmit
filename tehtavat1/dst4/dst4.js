/*
Tee uusi JS -luokka jonka nimi on MySet. Tee luokkaan konstruktori jossa otetaan vastaan
parametrina valmis taulukko, tai jos sitä ei ole annettu, alustetaan tyhjä taulukko,
johon setti luodaan. Vastaanotettava valmis taulukko menee konstruktorissa läpi funktiosta,
joka tekee taulukon alkioista uniikkeja, eli poistaa ylimääräiset samanlaiset alkiot.

Tee konstruktoriin myös ominaisuus eli property size johon tulee setin koko.
Luokassa on siis kaksi ominaisuutta: arr ja size. Tee luokkaan viisi metodia:
1) add(data), 2) remove(data), 3) has(data) ja 4) union(setA, ...sets) sekä
5) checkUnique(arr). Kolme ensimmäistä metodia palauttavat true tai false
ja neljäs metodi palauttaa MySet-tyyppisen unionin. CheckUnique(arr) palauttaa taulukon
jonka alkiot ovat uniikkeja. Luo kolme MySet -oliota ja kokeile kaikkia metodeja.
*/

// Tehdään uusi luokka
class MySet {
  // constructor on erikoismetodi, jolla luodaan
  // ja alustetaan luokasta tehtyjä olioita
  constructor(arr) {
    // jos sisään tulee taulukko
    if (arr) {
      // checkUnique poistaa samanlaiset alkiot sisääntulevasta taulukosta
      arr = this.checkUnique(arr);
      this.arr = arr; // this.arr on luokan ominaisuus
      this.size = arr.length; // this.size on luokan toinen ominaisuus
      // jos sisään ei tule taulukkoa
    } else {
      this.arr = [];
      this.size = 0;
    }
  }

  // Palauttaa taulukon, jonka alkiot ovat uniikkeja
  checkUnique(arr) {
    const uniqueArray = [];
    // sisääntulevan taulukon alkiot pushataan silmukassa uuteen taulukkoon,
    // samalla tutkitaan ettei uuteen taulukkoon tule kahta samanlaista alkiota
    arr.forEach((element) => {
      if (
        uniqueArray.indexOf(element) === -1 &&
        element !== '' &&
        element !== null
      ) {
        uniqueArray.push(element);
      }
    });
    return uniqueArray;
  }

  // Lisää alkion settiin
  add(data) {
    // tarkistetaan että taulukkoon menee uniikkeja alkioita,
    // lisätään uniikkialkio taulukkoon ja kasvatetaan this.sizea yhdellä
    if (this.arr.indexOf(data) === -1) {
      this.arr.push(data);
      this.size += 1;
      return true;
    } else {
      return false;
    }
  }

  // Poistaa alkion setistä
  remove(data) {
    // tutkitaan indexOf:lla onko alkio taulukossa,
    // poistetaan jos on ja vähennetään this.sizea yhdellä
    if (this.arr.indexOf(data) !== -1) {
      // asetetaan index-luku muuttujaan selkeyden vuoksi
      const index = this.arr.indexOf(data);
      // poistetaan alkio splicella
      // index = mistä lähdetään liikkeelle
      // 1 = kuinka monta alkiota poistetaan
      this.arr.splice(index, 1);
      this.size -= 1;
      return true;
    } else {
      return false;
    }
  }

  // Tarkastaa onko alkio taulukossa
  has(data) {
    // tutkitaan indexOf:lla onko alkio taulukossa,
    // jos on, palautetaan true, muutoin false
    if (this.arr.indexOf(data) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  // Tekee annetuista seteistä unionit lisäämällä
  // muiden settien alkiot ensimmäiseen settiin
  union(setA, ...sets) {
    // ulompi looppi ottaa aina yhden setin käsittelyyn
    sets.forEach((set) => {
      //console.log(set.arr);
      // sisempi looppi lisää ko. setin alkiot
      // setA:han add-metodin avulla
      set.arr.forEach((elem) => {
        //console.log(elem);
        setA.add(elem);
      });
    });
    return setA;
  }
}

const myset1 = new MySet([2, 3, 3]);
const myset2 = new MySet([3, 4, 5]);
const myset3 = new MySet([3, 4, 5, 6, 7]);

console.log('Set1:');
console.log(myset1);

console.log('Lisätään luku 4:');
myset1.add(4);
console.log(myset1);

console.log('Poistetaan luku 4:');
myset1.remove(4);
console.log(myset1);

console.log('Tarkastetaan löytyykö luku 2:');
console.log(myset1.has(2));

console.log('Tarkastetaan löytyykö luku 4:');
console.log(myset1.has(4));

console.log('Set1 ja Set2 unioni:');
const unionTest = myset1.union(myset1, myset2);
console.log(unionTest);

console.log('Set1, Set2 ja Set3 unioni:');
const unionTest2 = myset1.union(myset1, myset2, myset3);
console.log(unionTest2);

console.log('Sisältääkö Set1 alkion 2:');
console.log(myset1.has(2));

module.exports = MySet;
