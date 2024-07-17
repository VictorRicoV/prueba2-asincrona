// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');

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

const randomImage = async () => {
  try {
    const response = await fetch(
      'https://dog.ceo/api/breed/affenpinscher/images/random'
    );
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};
randomImage();
getData();
console.dir(selectElement);

buttonElement.addEventListener('click', randomImage);
