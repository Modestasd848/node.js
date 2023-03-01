const carsContainerDiv = document.querySelector('.wrapper');
const main = document.querySelector('main');

const PORT = 'http://127.0.0.1:3000/cars';

async function getCars() {
  const res = await fetch(PORT);
  const data = await res.json();
  console.log(data);

  carsContainerDiv.innerHTML = '';

  data.forEach((car) => generateCar(car));
}

function generateCar(car) {
  const carCard = document.createElement('div');
  carCard.classList.add('car-card');

  const carBrandAndPriceDiv = document.createElement('div');
  carBrandAndPriceDiv.classList.add('price-brand');

  const CarBrand = document.createElement('p');
  CarBrand.textContent = car.title;
  CarBrand.classList.add('car-brand');

  const numberplates = document.createElement('h3');
  numberplates.textContent = car.numberplates;

  const carImage = document.createElement('img');
  carImage.src = car.image;

  const price = document.createElement('p');
  price.textContent = `$${car.price}`;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'DELETE';
  const carId = car.id;
  deleteButton.addEventListener('click', () => {
    deleteButtonHandler(carId);
  });

  carBrandAndPriceDiv.append(CarBrand, price);
  carCard.append(numberplates, carBrandAndPriceDiv, carImage, deleteButton);
  carsContainerDiv.append(carCard);
  main.append(carsContainerDiv);
}

async function deleteButtonHandler(id) {
  const res = await fetch(PORT + `/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res;
  console.log(data);
  getCars();
}

getCars();
