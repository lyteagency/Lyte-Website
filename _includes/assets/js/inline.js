if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

let formElements = document.querySelectorAll('input, textarea');

const checkIfEmpty = function (event) {
    if (event.target.value !== '')
    {
        event.target.classList.remove('empty')
    }
}
formElements.forEach(function(el) {
    el.addEventListener('load', checkIfEmpty, false);
    el.addEventListener('focus', checkIfEmpty, false);
    el.addEventListener('keyup', checkIfEmpty, false);
});
