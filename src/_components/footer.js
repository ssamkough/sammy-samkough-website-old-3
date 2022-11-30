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
    <li><a href="../thoughts/index.html">thoughts</a></li>
    <li><a href="../writings/index.html">writings</a></li>
    <li><a href="../projects/index.html">projects</a></li>
    <li><a href="../works/index.html">works</a></li>
    <li><a href="../volunteering/index.html">volunteering</a></li>
    <li><a href="../photos/index.html">photos</a></li>
    <li><a href="../videos/index.html">videos</a></li>
    <li><a href="../directory/index.html">directory</a></li>
    <li><a href="../links/index.html">links</a></li>
    <li><a href="../contact/index.html">contact</a></li>
    <li><a href="../meta/index.html">meta</a></li>
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
