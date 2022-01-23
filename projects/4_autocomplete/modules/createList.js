let datalist = document.querySelector('datalist');

function createOptionDatalist(data) {
  let option = datalist.appendChild(document.createElement('option'));
  option.setAttribute('value', data.properties.city  + ' - ' + data.properties.label + ' - ' + data.properties.context + ' - ' + data.properties.postcode )
}

export { datalist, createOptionDatalist}