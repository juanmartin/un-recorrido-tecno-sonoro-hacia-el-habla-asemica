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

    // Agregar el botón de dark/light mode
    const darkLightLink = document.querySelector("#docsify-darklight-theme");
    console.log("darklight link", darkLightLink);
    const sidebar = document.getElementsByClassName("app-name")[0];
    sidebar.appendChild(darkLightLink);
    console.log("sidebar", sidebar);

    darkLightLink.style.position = "relative";
    darkLightLink.style.display = "block";
    darkLightLink.style.margin = "auto";
    darkLightLink.style.top = "0";
    darkLightLink.style.right = "0";
  });
}, window.$docsify.plugins);
