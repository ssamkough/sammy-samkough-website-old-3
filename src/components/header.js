const template = document.createElement("template");
template.innerHTML = `
<style>

</style>

<header>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("page-header", Header);
