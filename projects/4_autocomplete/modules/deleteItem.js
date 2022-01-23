import { createObject } from "./createObject.js"

async function deleteItem(arr) {
    arr.forEach(item => {
        item.btnDelete.addEventListener('click', () => {
            item.item.remove()
        })
    })
}

export default deleteItem;