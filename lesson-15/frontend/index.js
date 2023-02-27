const main = document.querySelector('main');

async function getProducts(page) {
  const res = await fetch(
    `http://127.0.0.1:3000/product/pagination?page=${page}&size=5`
  );
  const data = await res.json();

  clearMain();
  data.data.forEach((product) => generateProduct(product));
  generatePageButtons(data.totalPages);
}

function generatePageButtons(amount) {
  for (let i = 0; i < amount; i++) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.id = i + 1;
    button.addEventListener('click', pageButtonHandler);

    main.append(button);
  }
}

function pageButtonHandler(e) {
  const id = e.target.id;
  getProducts(id);
}

function clearMain() {
  main.innerHTML = '';
}

function generateProduct(product) {
  const containerDiv = document.createElement('div');

  const title = document.createElement('h3');
  title.textContent = product.title;

  const description = document.createElement('p');
  description.textContent = product.description;

  const price = document.createElement('h6');
  price.textContent = product.price;

  containerDiv.append(title, description, price);
  main.append(containerDiv);
}

getProducts(1);
