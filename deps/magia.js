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

        // aca se puede jugar

        coso();
      });

      observer.observe(search, { attributes: true });
    }

    // Agregar el botón de dark/light mode
    const darkLightLink = document.querySelector("#docsify-darklight-theme");
    const sidebar = document.getElementsByClassName("app-name")[0];
    sidebar.appendChild(darkLightLink);

    darkLightLink.style.position = "relative";
    darkLightLink.style.display = "block";
    darkLightLink.style.margin = "auto";
    darkLightLink.style.top = "0";
    darkLightLink.style.right = "0";

    // sidebar collapse
    // initializeCollapsibleSidebar();
  });

  console.log("content loaded");
}, window.$docsify.plugins);

function coso() {
  // let sidebar = document.querySelectorAll(".sidebar-nav ul, .sidebar-nav li");
  let sidebar = document.querySelectorAll(".sidebar-nav");
  // let asd = document.querySelectorAll("ul");
  // console.log("asd", asd);
  console.log("sidebar", sidebar);

  sidebar.forEach((el) => {
    console.log("childs", el);
    let ul;
    if (el.nodeType == "ul") {
      ul = el;
    }
    el.querySelectorAll("li").forEach((li) => {
      console.log("lis", li);
      li.addEventListener("click", (el) => {
        console.log("click ul", el);
        console.log("click ul", el.target);
        // ul.classList.toggle("hidden");
        const link = item.querySelector("a");
        console.log("link", link);
        const collapseButton = document.createElement("button");
        collapseButton.textContent = "▼";
        collapseButton.classList.add("collapse-toggle");
        collapseButton.addEventListener("click", function () {
          item.classList.toggle("hidden");
          collapseButton.textContent = item.classList.contains("hidden") ? "►" : "▼";
        });
        item.insertBefore(collapseButton, link);
      });
    });
  });
}
