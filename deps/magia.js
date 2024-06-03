window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(function (hook, vm) {
  hook.doneEach(function () {
    console.log("Magia.js loaded");

    // Pisar el placeholder de la barra de búsqueda
    let search = document.querySelector(
      "body > main > aside > div.search > div.input-wrap > input[type=search]"
    );

    if (search) {
      var observer = new MutationObserver(function () {
        if (search.getAttribute("placeholder") !== "Buscar") {
          search.setAttribute("aria-placeholder", "Buscar");
          search.setAttribute("placeholder", "Buscar");
        }
      });

      observer.observe(search, { attributes: true });
    }
  });
}, window.$docsify.plugins);
