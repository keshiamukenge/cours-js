let input = document.getElementById('input-search');

function setValue() {
  let userValue = '';
    input.addEventListener('input', () => {
      input.value.replace(/ /g, "%20")
      input.setAttribute('value', input.value)
      userValue = input.value;
      return userValue;
  })
  return userValue;
}
setValue();

export { setValue, input };