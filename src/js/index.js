// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');
const randomImageElement = document.getElementById('img-random');

const getData = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const allBreeds = Object.keys(data.message);
    printAllBreeds(allBreeds);
  } catch (error) {
    console.log(error);
  }
};

const printAllBreeds = allBreeds => {
  const fragment = document.createDocumentFragment();
  allBreeds.forEach(breed => {
    const newOption = document.createElement('option');
    newOption.textContent = breed;
    fragment.append(newOption);
  });
  selectElement.append(fragment);
};

const printImage = randomImages => {
  randomImageElement.src = randomImages;
};

const randomImage = async () => {
  const selectBreed = selectElement.value;
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${selectBreed}/images/random`
    );
    const data = await response.json();
    const randomImages = data.message;
    printImage(randomImages);
  } catch (error) {
    console.log(error);
  }
};

getData();

buttonElement.addEventListener('click', randomImage);
