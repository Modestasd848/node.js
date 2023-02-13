import Car from './CarModel.js';

export async function getAllCars(req, res) {
  try {
    const cars = await Car.find();

    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addNewCar(req, res) {
  try {
    const { make, price, year } = req.body;

    const car = {
      make,
      price,
      year,
    };

    const carDB = await Car.create(car);

    res.json(carDB);
  } catch (error) {
    res.status(500);
  }
}
