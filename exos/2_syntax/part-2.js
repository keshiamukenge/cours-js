'use strict';

// # 2-1_Syntax, Partie 2

console.log('');
console.log('--- PARTIE 2 ---');
console.log('');
console.log('--- Ça va boucler sévère ! ---');
console.log('--- 1 ---');
/*
  créer une fonction 'x10' qui prend un nombre en entrée et renvoie ce nombre multiplié par 10.
*/
function x10(nb) {
  return nb * 10;
}

const nb = 2;
x10(nb);


console.log('--- 2 ---');
/*
  créer un nouveau tableau à partir de 'nombres' contenant chaque nombre multiplié par 10, en utilisant 'x10'
  Utiliser une boucle for
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887, 3141];
const newArr = [];

for(let i = 0; i < nombres.length; i++) {
  const newNb = x10(nombres[i]);
  newArr.push(newNb);
}
console.log(newArr);


console.log('--- 2-bis ---');
// la même chose avec une boucle for ... of
let newArr2 = [];

for(let nb of nombres) {
  newArr2.push(nb * 10);
}
console.log(newArr2);

console.log('--- 2-ter ---');
// la même chose avec .map
const newArr3 = nombres.map(x10);
console.log(newArr3);

console.log('--- 3 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant une boucle for et if
*/
const newArr4 = [];

for(let i = 0; i < nombres.length; i++) {
  if(nombres[i] > 100) {
    newArr4.push(nombres[i]);
  }
}

console.log(newArr4);

console.log('--- 3-bis ---');
// la même chose avec .filter
const newArr5 = nombres.filter(nb => {
  return nb > 100;
});
console.log(newArr5);


console.log('--- 4 ---');
/*
  à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/
const newArr6 = nombres.filter(nb => {
  return nb % 2 === 0;
});
console.log(newArr6);

console.log('--- 5 ---');
// créer une fonction 'getLength' qui prend une string en entrée en renvoie sa longueur
function getLength(str) {
  return str.length;
}

const str = 'hello';
getLength(str);

console.log('--- 6 ---');
/*
  logguer chacune des valeurs de "couleurs" et leur longueur dans la console
  en utilisant .forEach() et 'getLength'.
  ranger le résultat de couleurs.forEach(...) dans une variable '_longueurs'
*/
const colors = ['red', 'blue', 'yellow', 'green'];

const _longueurs = colors.forEach(color => console.log(color, getLength(color)));

console.log('--- 7 ---');
/*
  à partir de couleurs créer un nouveau tableau 'longueurs' contenant toutes les longueurs
  en utilisant .map() et 'getLength'.
  logguer '_longueurs' et 'longueurs', comprendre la différence entre .map et .forEach
*/
const longueurs = colors.map(getLength);

console.log(longueurs, _longueurs);

console.log('');
console.log("--- Si t'en as marre, c'est normal, c'est la fin ---");
console.log('--- 1 ---');
/*
ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
*/
const personnes = [{
  nom: 'Romain',
  date: '1985-12-31'
}];

personnes.push(
  {nom: 'Romane', date: '1988-08-26'},
  {nom: 'Jade', date: '1998-03-18'},
)

console.log(personnes);

console.log('--- 2 ---');
/*
  à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
*/
const arrName = personnes.map(personne => {
  return personne.nom;
});

console.log(arrName);

console.log('--- 3 ---');
/*
  créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
  et renvoie l'âge en nombre, en utilisant Date()
*/
function calculerAge(date) {
  const start = new Date(date);
  const today = new Date();
  let age = Math.floor((today - start) /1000/60/60/24/365.25);
  return age;
}

const date = '1998-09-04';
calculerAge(date);

console.log('--- 4 ---');
/*
  à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
*/
const newAge = personnes.map(personne => {
  return calculerAge(personne.date);
});

console.log(newAge);