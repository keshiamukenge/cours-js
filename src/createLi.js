// [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
import moment from '../node_modules/moment/dist/moment.js';

function createLi(tweet) {
    const tweetItem = document.createElement('li');
    tweetItem.innerText = tweet.full_text;
    moment(tweet.created_at).startOf('day').fromNow();
    return tweetItem;
}

export default createLi;