const MySet = require('../dst4.js');
const expect = require('chai').expect;

describe('Testing class MySet', () => {
  // testioliot
  const myset1 = new MySet([1, 2, 3]);
  const myset2 = new MySet([2, 3, 4, 5]);
  const myset3 = new MySet([1, 3, 4, 5, 6, 7]);
  // testitaulukot ja vastaavat oliot checkUnique-metodin testaukseen
  const arr1 = [2, 3, 3, 4];
  const arr1set = new MySet(arr1);
  const arr2 = [1, 3, 4, 4, 5, 5];
  const arr2set = new MySet(arr2);

  // JS-luokka on oikesti funktio
  it('Should export a class', () => {
    expect(MySet).to.be.a('Function');
    expect(myset1).to.be.an('Object');
  });

  it('Class should contain certain methods', () => {
    expect(myset1.add).to.be.a('Function');
    expect(myset1.remove).to.be.a('Function');
    expect(myset1.has).to.be.a('Function');
    expect(myset1.union).to.be.a('Function');
    expect(myset1.checkUnique).to.be.a('Function');
  });

  it('add(data) -method', () => {
    expect(myset1.add(4)).to.be.true;
    expect(myset1.add(3)).to.be.false;
    expect(myset1.size).equal(4);
  });

  it('remove(data) -method', () => {
    expect(myset1.remove(2)).to.be.true;
    expect(myset1.size).equal(3);
  });

  it('has(data) -method', () => {
    expect(myset1.has(2)).to.be.false;
    expect(myset1.has(4)).to.be.true;
  });

  it('union(setA, ...sets) -method', () => {
    const u = myset1.union(myset1, myset2, myset3);
    expect(u.size).equal(7);
    for (let i = 1; i < 8; i++) {
      expect(u.has(i)).to.be.true;
    }
  });

  it('checkUnique(arr) -method', () => {
    const uniqarr1 = arr1set.checkUnique(arr1);
    expect(uniqarr1).deep.equal([2, 3, 4]);
    const uniqarr2 = arr2set.checkUnique(arr2);
    expect(uniqarr2).deep.equal([1, 3, 4, 5]);
  });
});
