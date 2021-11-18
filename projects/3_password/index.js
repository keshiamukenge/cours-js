const containerMdp = document.querySelector('#mdp');
const char = document.querySelector('#character-nb');
const inputCheckbox = document.querySelectorAll('input[type=checkbox]');
const button = document.querySelector('button');
const form = document.querySelector('form');

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const specialsChar = '!@#$%^&*_-+='.split('');

let mdp = [];

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (min - max + 1) + max);
}

const addLetters = () => {
    if(char.value >= 8) {
        for(let i = 0; i < char.value ; i++) {
            mdp.push(letters[getRandom(0, letters.length)]);
        }
    } else {
        alert('Votre mot de passe doit faire 8 caractères minimum');
    }
}

const addNb = () => {
    if(inputCheckbox[0].checked){
        for(let i = 0; i <= 3; i++) {
            mdp[getRandom(0, mdp.length)] = getRandom(0, 9);
        }
    }
}

const addSpecChars = () => {
    if(inputCheckbox[2].checked){
        for(let i = 0; i <= 2; i++) {
            mdp[getRandom(0, mdp.length)] = specialsChar[getRandom(0, specialsChar.length)];
        }
    }
}

const addUppercases = () => {
    if(inputCheckbox[4].checked){
        for(let i = 0; i <= 2; i++) {
            mdp[getRandom(0, mdp.length)] = lettersUpper[getRandom(0, lettersUpper.length)];
        }
    }
}

const containerNumber = document.querySelector('#number');
const containerChar = document.querySelector('#char');
const containerUpperCase = document.querySelector('#uppercase');

const isChecked = (el, pos) => {
    return el.childNodes[pos].childNodes[1].checked;
}

const disableMdp = () => {
    mdp = [];
}

const checkboxIsChecked = () => {
    if(isChecked(containerNumber, 3) && isChecked(containerNumber, 5)) {
        alert('Un seul choix est possible pour les chiffres');
        disableMdp();
    } else if (!isChecked(containerNumber, 3) && !isChecked(containerNumber, 5)) {
        alert('Cocher une option pour les chiffres');
        disableMdp();
    } else if (isChecked(containerChar, 3) && isChecked(containerChar, 5)) {
        alert('Un seul choix est possible pour les caractères spéciaux');
        disableMdp();
    } else if (!isChecked(containerChar, 3) && !isChecked(containerChar, 5)) {
        alert('Cocher une option pour les caractères spéciaux');
        disableMdp();
    } else if (isChecked(containerUpperCase, 3) && isChecked(containerUpperCase, 5)) {
        alert('Un seul choix est possible pour les majuscules');
        disableMdp();
    } else if (!isChecked(containerUpperCase, 3) && !isChecked(containerUpperCase, 5)) {
        alert('Cocher une option pour les majuscules');
        disableMdp();
    }
}

const displayMdp = () => {
    document.querySelector('#mdp span').innerHTML = mdp.join('');
}

function onClick() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
        
    addLetters();
    addNb();
    addSpecChars();
    addUppercases();
    checkboxIsChecked()
    displayMdp();
    mdp = [];
}
