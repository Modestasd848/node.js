// fetch('http://127.0.0.1:3000/')
//   .then((res) => res.json())
//   .then((data) => {
//     const ul = document.createElement('li');
//     ul.textContent = data;

//     main.append(ul);
//   });

// const main = document.querySelector('main');

const carList = document.querySelector('ul');

async function fetchData() {
  const res = await fetch('http://127.0.0.1:5500');
  const cars = await res.json();

  cars.forEach((car) => {
    createListEntry(car);
  });
}

function createListEntry(car) {
  const li = document.createElement('li');
  li.textContent = car;

  carList.append(li);
}

fetchData();
