function editItem(arr) {
    arr.forEach(item => {
        console.log(item)
        item.btnEdit.addEventListener('click', () => {
            let inputEdit = item.createElement('input');
            inputEdit = 'edit-input';
            item.item.appendChild(inputEdit);
        })
    })
}

export default editItem;