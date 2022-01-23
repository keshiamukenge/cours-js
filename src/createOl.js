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

export default createOlFinal;