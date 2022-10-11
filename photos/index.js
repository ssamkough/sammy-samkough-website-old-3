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
const mainContainer = document.getElementById("photos-container");

for (let i = 0; i < array.length; i++) {
  const { src, alt } = array[i];

  const img = document.createElement("img");
  img.className = "img-photo";
  img.src = src;
  img.alt = alt;
  img.width = 100;
  img.height = 100;

  img.onclick = () => {
    mainContainer.style.display = "none";

    const figure = document.getElementById("photo-figure");
    figure.style.display = "flex";

    const figureImg = document.createElement("img");
    figureImg.src = src;
    figureImg.alt = alt;
    figureImg.width = 300;
    figureImg.height = 300;

    const figureCaption = document.createElement("figcaption");
    figureCaption.innerHTML = alt;

    const figureBackButton = document.createElement("button");
    figureBackButton.innerHTML = "Back";
    figureBackButton.onclick = () => {
      figure.style.display = "none";
      mainContainer.style.display = "block";
      window.location.reload();
    };

    figure.append(figureImg);
    figure.append(figureCaption);
    figure.append(figureBackButton);
  };

  if (i > 4) img.loading = "lazy";

  photosFragment.appendChild(img);
}

mainContainer.appendChild(photosFragment);
