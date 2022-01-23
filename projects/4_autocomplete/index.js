import promise from './modules/fetchData.js'
import { setValue, input } from './modules/setValue.js'
import { addItem, button } from './modules/addItem.js'
import { allItems } from './modules/createObject.js'
import deleteItem from './modules/deleteItem.js'

promise();
setValue(input);
addItem(input);

const check = () => {
  if(allItems.length > 0) {
    deleteItem(allItems);
  }
}

button.addEventListener('click', () => {
  check();
})