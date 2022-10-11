const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {
        padding: 0;
        margin: 0;
    }
</style>

<div class="experience-block">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
        <h3><span class="company"></span> | <span class="title"></span></h3>
        <h3 class="dates"></h3>
    </div>
    <div style="padding: 4px"></div>
    <span>
        <slot name="description" />
    </span>
</div>

<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sam | photos</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="main-container">
      <div id="photos-container"></div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>

`;

class ExperienceBlock extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".company").innerText =
      this.getAttribute("company");
    this.shadowRoot.querySelector(".title").innerText =
      this.getAttribute("title");
    this.shadowRoot.querySelector(".dates").innerText =
      this.getAttribute("dates");
  }
}

window.customElements.define("experience-block", ExperienceBlock);
