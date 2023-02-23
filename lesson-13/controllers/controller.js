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
      `SELECT id, description, price, title FROM product where id = ${id}`
    );
    res.json(product.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function createNewProduct(req, res) {
  try {
    const { title, description, price } = req.body;

    const product =
      await DB.query(`insert into product (title, description, price)
     values ('${title}', '${description}', ${price})`);
    res.json(product);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
}

export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    const product = await DB.quert(`update product  
    set price=${price}, description='${description}', title='${title}'
    where id=${id}`);
    res.json(product);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await DB.query(`delete from product where id=${id}`);

    res.json(product);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
}
