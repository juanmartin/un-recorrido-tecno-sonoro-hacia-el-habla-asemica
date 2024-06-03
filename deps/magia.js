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

    // dark/light theme switcher
    let themeSwitcher = document.createElement("button");
    themeSwitcher.innerText = "Switch Theme";

    console.log("darklight link", themeSwitcher);
    const sidebar = document.getElementsByClassName("app-name")[0];
    console.log("sidebar", sidebar);
    sidebar.appendChild(themeSwitcher);

    let darkThemeLink = document.querySelector('link[title="dark"]');
    let lightThemeLink = document.querySelector('link[title="light"]');
    let body = document.body;

    if (!lightThemeLink.disabled) {
      console.log("light mode");
      body.classList.remove("dark-mode");
    } else {
      console.log("dark mode");
      body.classList.add("dark-mode");
    }

    themeSwitcher.addEventListener("click", function () {
      body.classList.add("transitioning");

      if (darkThemeLink.disabled) {
        console.log("light mode");
        body.classList.remove("dark-mode");
        // Current theme is light, switch to dark mode
        darkThemeLink.disabled = false;
        lightThemeLink.disabled = true;
      } else {
        console.log("dark mode");
        body.classList.add("dark-mode");
        // Current theme is dark, switch to light mode
        darkThemeLink.disabled = true;
        lightThemeLink.disabled = false;
      }
      setTimeout(function () {
        body.classList.remove("transitioning");
      }, 500); // Remove the transitioning class after 0.5s
    });
  });
}, window.$docsify.plugins);
