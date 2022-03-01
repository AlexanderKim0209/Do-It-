const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const BG = "background"

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.className = BG;

// console.log(bgImage);

document.body.appendChild(bgImage);
//prependChlid는 사진이 가장 앞으로 오게함.