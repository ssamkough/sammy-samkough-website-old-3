const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {
        padding: 0;
        margin: 0;
    }
</style>

<div class="project-block">
  <h3 class="title"></h3>
  <h3><a class="link" target="_blank" rel="noopener noreferrer"></a></h3>
  <div style="padding: 2px"></div>
  <h3 class="dates"></h3>
  <div style="padding: 4px"></div>
  <span>
    <slot name="description" />
  </span>
</div>
`;

class ProjectBlock extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".title").innerText =
      this.getAttribute("title");
    this.shadowRoot.querySelector(".link").innerText =
      this.getAttribute("link");
    this.shadowRoot.querySelector(".link").href = this.getAttribute("link");
    this.shadowRoot.querySelector(".dates").innerText =
      this.getAttribute("dates");
  }
}

window.customElements.define("project-block", ProjectBlock);
