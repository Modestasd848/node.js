import DB from '../db/db.js';

export function validateQuery(req, res, next) {
  if (!req.body || !req.body.price || !req.body.numberplates) {
    res.json({
      error: 'must be fill up tiltle, price and numberplates',
    });
  } else {
    next();
  }
}

export function middlewareTest(req, res, next) {
  console.log(isNaN(req.body.price));
  if (
    !req.body.title ||
    !req.body.image ||
    !req.body.price ||
    !req.body.numberplates
  ) {
    res.json({
      error: 'Title, image, price, numberplates fields need to be filled',
    });
  } else if (
    isNaN(req.body.price) === true ||
    req.body.numberplates.length > 7
  ) {
    res.json({
      error: 'price is invalid number or numberplate field length is too long',
    });
  } else {
    next();
  }
}

export async function checkForId(req, res, next) {
  const { id } = req.params;
  if (!isNaN(id)) {
    const car = await DB.query(`Select id from cars where id=${id}`);
    if (car.rows.length === 0) {
      res.status(404).json({ error: 'Id is invalid' });
    } else {
      next();
    }
  } else {
    res.status(404).json({ error: 'Id is not a number' });
  }
}
