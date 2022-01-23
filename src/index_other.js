'use strict';

import createLi from './createLi.js';
import createOlFinal from './createOl.js';
import createBtn from './filterTweets.js';

function getJson(url) {
  return fetch(url)
    .then(resp => {
      return resp.json();
    }).catch(error => {
      console.error(error);
    })
}

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const promise1 = getJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )

    const promise2 = getJson(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
    )

    const pAll = await Promise.all([promise1, promise2]);
    const tweets = pAll.flat();

    // [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
    
    // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]
    let ol = createOlFinal(tweets);
    
    const button = createBtn(tweets, ol);
    document.body.append(button);
    document.body.append(ol);
    // [3] créer un <bouton> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran

    

    // ### Projet Touitter ###
    // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

    // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus

    /* [6] Créer un bouton qui, quand on clique dessus:
        - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
        - désactive le tracking quand on reclique dessus
    */
        const buttonMouse = document.createElement('button');
        buttonMouse.innerText = 'mouse';
        document.body.append(buttonMouse);
        
        let display = false;
        
        function displayMousePos() {
            window.addEventListener('mousemove', (e) => {
                if (display) {
                    console.log(e.clientX, e.clientY);
                }
            });
        }
        displayMousePos();

        function trackMousePos() {
          buttonMouse.addEventListener('click', () => {
              if (display) {
                  display = false;
              } else {
                  display = true;
              }
          })
      }

    /* [7] créer une fonction qui crée et renvoie le bouton de filtre.
      Cette fonction doit contenir toute la logique liée au filtre.
      Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
    */

    // [8] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

    /* [9] Utiliser Promise.all() pour charger également les tweets de cette url :
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
    */

    // ### BONUS : LOCALSTORAGE ###

    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
          + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  }, {
    once: true
  },
);