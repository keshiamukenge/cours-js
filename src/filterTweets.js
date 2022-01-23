import createOl from './createOl.js';

// [3] créer un <bouton> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran
function createBtn(tweets, target) {
    const button = document.createElement('button');
button.innerText = 'Filtre';
document.body.insertBefore(button, document.querySelector('ol'));

let isFr = false;
    
    button.addEventListener('click', () => {
      if (isFr) {
        const olMulti = createOl(tweets);
        target.replaceWith(olMulti);
        target = olMulti;
        isFr = false;
      } else {
        const arrFr = tweets.filter(tweet => {
          return tweet.lang === 'fr';
        });

        const olFr = createOl(arrFr);
        target.replaceWith(olFr);
        target = olFr;

        isFr = true;
      }
    });
    return button;
}

export default createBtn;