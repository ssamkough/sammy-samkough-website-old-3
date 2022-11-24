const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
  header {
    font-family: "Athelas", Calibri;
  }
  
  h1 {
    padding: 0px;
    margin: 0px;
  }

  a {
    transition: 0.2s ease-in;
    text-decoration: none;
    color: blue;
    outline-color: purple;
  }

  a:hover {
    filter: hue-rotate(120deg);
  }

  header {
    font-family: "Athelas", Calibri;
  }

  header > h1 > a {
    color: black;
  }

  header > h1 > a:hover {
    color: crimson;
  }
</style>

<header>
  <h1><a href="./index.html">sammy samkough</a><span class="page-name"></span></h1>
  <slot />
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector(".page-name").innerText =
      this.getAttribute("page-name") ? ' | ' + this.getAttribute("page-name") : "";
  }
}

window.customElements.define("page-header", Header);
