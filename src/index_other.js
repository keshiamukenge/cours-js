'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
        'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
      )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        // ### Projet Touitter ###
        // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

        // [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
        function createLi(tweet) {
          const tweetItem = document.createElement('li');
          tweetItem.innerText = tweet.full_text;
          return tweetItem;
        }

        // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]
        let ol = createOlFinal(tweets);
        document.body.append(ol);

        // [3] créer un <bouton> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran
        const button = document.createElement('button');
        button.innerText = 'Filtre';
        document.body.insertBefore(button, document.querySelector('ol'));

        let isFr = false;

        button.addEventListener('click', () => {
          if (isFr) {
            const olMulti = createOlFinal(tweets);
            ol.replaceWith(olMulti);
            ol = olMulti;
            isFr = false;
          } else {
            const arrFr = tweets.filter(tweet => {
              return tweet.lang === 'fr';
            });

            const olFr = createOlFinal(arrFr);
            ol.replaceWith(olFr);
            ol = olFr;

            isFr = true;
          }
        });

        // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus

        /* [5] créer une fonction createOl(), qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [2], [3], [4] */
        function createOlFinal(tweets) {
          const olFinal = document.createElement('ol');
          tweets.map(tweet => {
            let li = document.createElement('li');
            li.innerText = tweet.full_text;
            olFinal.append(li);
          });

          return olFinal;
        }

        /* [6] Créer un bouton qui, quand on clique dessus:
            - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
            - désactive le tracking quand on reclique dessus
        */
       const buttonMouse = document.createElement('button');
       buttonMouse.innerText = 'mouse';
       document.body.append(buttonMouse);

       let display = false;

      buttonMouse.addEventListener('click', () => {
        window.addEventListener('mousemove', (e) => {
          if(!display){
            console.log(e.clientX, e.clientY);
            display = true;
          } else {
            display = false;
          }
        });
      })

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
      })
      .catch(function (e) {
        console.error(e);
      });
  }, {
    once: true
  },
);