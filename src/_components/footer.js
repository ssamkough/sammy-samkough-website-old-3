const template = document.createElement("template");
template.innerHTML = `
<style>
  a {
    transition: 0.2s ease-in;
    text-decoration: none;
    color: blue;
    outline-color: purple;
  }

  a:hover {
    filter: hue-rotate(120deg);
  }

  footer > ul {
    padding: 0px;
    margin: 0px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  footer > ul > li {
    list-style-type: none;
  }
</style>

<footer>
  <ul>
    <li><a href="../about/index.html">about</a></li>
    <li><a href="../photos/index.html">photos</a></li>
  </ul>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("page-footer", Footer);
