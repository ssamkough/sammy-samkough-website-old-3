const container = document.getElementById("experience-container");

const block = document.createElement("experience-block");
block.setAttribute("company", "company");
block.setAttribute("title", "title");
block.setAttribute("dates", "dates");

const description = document.createElement("span");
description.setAttribute("slot", "description");

const descriptionText = document.createTextNode("hi there");
description.appendChild(descriptionText);

container.appendChild(block);
