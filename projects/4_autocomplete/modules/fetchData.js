import { createOptionDatalist } from './createList.js';
import { input } from './setValue.js';

let apiUrl = 'https://api-adresse.data.gouv.fr/search/';
let autocomplete = '&autocomplete=1';
let url = '';

function setUrl() {
    let encodeUserValue = `?q=${encodeURIComponent(input.value)}`;
    let url = apiUrl + encodeUserValue + autocomplete;
    return url;
}

function getUrl() {
    input.addEventListener('input', () => {
        url = setUrl();
        return url;
    })
    return url;
}

const promise = () => {
    input.addEventListener('input', () => {
        fetch(getUrl())
        .then((response) => {
            return response.json();
        }).then((data) => {
            data.features.forEach(address => {
                createOptionDatalist(address);

            });
            return data
        });
    })
    
}

export default promise;