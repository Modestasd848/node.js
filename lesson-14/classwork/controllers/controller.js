import DB from '../db/db.js';

export async function getAllProducts(req, res) {
  try {
    const products = await DB.query(
      'SELECT id, description, price, title FROM product'
    );
    res.json(products.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await DB.query(
      `select id, description, price, title from product where id=${id}`
    );

    res.json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewProduct(req, res) {
  try {
    const { title, description, price } = req.body;

    const product = await DB.query(
      `insert into product (title, description, price) values ('${title}', '${description}', ${price})`
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    const product = await DB.query(
      `update product set price=${price}, description='${description}', title='${title}' where id=${id}`
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await DB.query(`delete from product where id=${id}`);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function routeNotFound(req, res) {
  res.status(404).json({ error: 'Endpoint not found' });
}
