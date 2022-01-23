let allItems = [];

const createObject = () => {
    let items = [...document.querySelectorAll('ul li')];
    return items.map(item => {
        return allItems.push({
            item,
            btnDelete: item.querySelector('button'),
            btnEdit: item.querySelector('.btn-edit')
        })
    })
}

export { createObject, allItems };