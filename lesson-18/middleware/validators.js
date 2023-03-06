export function validateId(req, res, next) {
  const { id } = req.params;
  const convertedId = +id;

  if (
    !isNumber(convertedId) ||
    convertedId < 1 ||
    !Number.isInteger(convertedId)
  ) {
    res.status(400).json({
      message: `Invalid ID: ${id}`,
    });
  } else {
    next();
  }
}

export function validateOrderBody(req, res, next) {
  const { description, price } = req.body;

  if (!isOrderBodyValid(description, price)) {
    res.status(400).json({
      message: 'Invalid body',
    });
  } else {
    next();
  }
}

export function validateCustomerBody(req, res, next) {
  const { name, address, phone } = req.body;

  if (isNumber(name) || isNumber(address) || !isNumber(phone)) {
    res.status(400).json({
      message: 'Invalid request body',
    });
  } else {
    next();
  }
}

export function validateOrderBodyBulk(req, res, next) {
  const { data } = req.body;
  let isValid = true;

  if (!Array.isArray(data)) {
    isValid = false;
  } else {
    data.forEach((element) => {
      if (!isOrderBodyValid(element.description, element.price)) {
        isValid = false;
      }
    });
  }

  if (isValid) {
    next();
  } else {
    res.status(400).json({
      message: 'Invalid request body',
    });
  }
}

function isOrderBodyValid(description, price) {
  const convertedPrice = +price;

  if (isNumber(description) || !isNumber(price) || convertedPrice < 0) {
    return false;
  } else {
    return true;
  }
}

function isNumber(value) {
  const numberValue = +value;

  return isNaN(numberValue) ? false : true;
}
