import DB from '../db/db.js';

export async function getAllCars(req, res) {
  try {
    const cars = await DB.query(
      'SELECT id, title, image, price, numberplates FROM cars'
    );
    res.json(cars.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function getCarById(req, res) {
  try {
    const { id } = req.params;
    const car = await DB.query(
      `Select id, title, image, price, numberplates FROM cars WHERE id=${id}`
    );
    res.json(car.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewCar(req, res) {
  try {
    const { title, image, price, numberplates } = req.body;
    const carObj = { title, image, price, numberplates };
    const car = await DB.query(`INSERT INTO cars
    (title, image, price, numberplates)
    VALUES('${title}', '${image}', ${price}, '${numberplates}');
    `);
    res.json(carObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCar(req, res) {
  try {
    const { id } = req.params;
    const car = await DB.query(`Delete FROM cars WHERE id=${id}`);
    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function routeNotFound(req, res) {
  res.status(404).json({ error: 'Endpoint not Found' });
}
