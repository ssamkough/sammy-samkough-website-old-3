const arr = ["1", "2", "3"];

const testElement = document.getElementById("test");

for (let i = 0; i < arr.length; i++) {
  const newElement = document.createElement("h1");
  newElement.innerHTML = arr[i];
  testElement.appendChild(newElement);
}
