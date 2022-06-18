const array = [
  {
    src: "./assets/mc-bros.png",
    alt: "the original minecraft bros. - marej and i",
  },
  {
    src: "./assets/evil-adam.png",
    alt: "adam in his most evil form",
  },
  {
    src: "./assets/me-and-mama.png",
    alt: "my mama and i when i was a baby with sunglasses on my face sillily",
  },
  {
    src: "./assets/nailsss.png",
    alt: "on the trip, right before raising canes, we toasted with our beautiful nails",
  },
  {
    src: "./assets/ogs-with-tete.png",
    alt: "the og squad, rami, my bro and i with our wonderful late tete",
  },
  {
    src: "./assets/baba-cant-eat.png",
    alt: "baba eating like a maniac beacuse he doesnt care about making a sense",
  },
  {
    src: "./assets/milo.png",
    alt: "probably the cutest picture of my dog, milo, ever",
  },
  {
    src: "./assets/my-beloved-lil-one.png",
    alt: "lil sister and i. i love her too much",
  },
  {
    src: "./assets/mc-bros-soccer.png",
    alt: "a perfectly captured picture of big mc bro and i that's accurate even until today",
  },
];

const photosFragment = document.createDocumentFragment();

for (let i = 0; i < array.length; i++) {
  const { src, alt } = array[i];
  const container = document.createElement("div");
  container.className = "photo-container";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const img = document.createElement("img");
  img.className = "img";
  img.src = src;
  img.alt = alt;
  if (i > 4) img.loading = "lazy";

  const span = document.createElement("span");
  span.innerHTML = alt;

  imgContainer.appendChild(img);

  container.appendChild(imgContainer);
  container.appendChild(span);

  photosFragment.appendChild(container);
}

const mainContainer = document.getElementById("photos-container");
mainContainer.appendChild(photosFragment);
