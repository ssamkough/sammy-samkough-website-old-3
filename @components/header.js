const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {
        padding: 0;
        margin: 0;
    }
</style>

<header>
    <h3>test</h3>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("sammy-header", Header);
