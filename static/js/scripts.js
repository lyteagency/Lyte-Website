let formElements = document.querySelectorAll('input, textarea');

const checkIfEmpty = function (event) {
    if (event.target.value !== '')
    {
      console.log('asdf');
      event.target.classList.remove('empty')
    }
}
formElements.forEach(function(el) {
    el.addEventListener('load', checkIfEmpty, false);
    el.addEventListener('focus', checkIfEmpty, false);
    el.addEventListener('keyup', checkIfEmpty, false);
});