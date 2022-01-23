import { input } from './setValue.js';
import { createObject } from './createObject.js';

let button = document.querySelector('.button-add');

function stopRefresh() {
    button.addEventListener("click", (event) => {
        event.preventDefault();
    });
}
stopRefresh();

function add() {
    let ul = document.getElementById('container-list');
    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    let btnDeleteText = document.createElement('p');
    let btnEdit = document.createElement('div');
    btnEdit.classList.add('btn-edit');
    btnEdit.innerHTML = '<i class="ri-edit-line"></i>';
    btnDeleteText.innerText = 'Delete';
    li.innerHTML = input.value;
    btnDelete.appendChild(btnDeleteText);
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    ul.appendChild(li);
}

function addItem() {
    button.addEventListener('click', () => {
        add();
        createObject();
        input.value = '';
    })
}

export { button, addItem };