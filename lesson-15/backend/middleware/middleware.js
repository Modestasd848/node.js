export function validateQuery(req, res, next) {
  if (!req.query.page || !req.query.size) {
    res.json({
      error: 'page or size not provided',
    });
  } else {
    next();
  }
}

export function checkIfAuthenticated(req, res, next) {
  if (req.isAuthenticated) {
    next();
  } else {
    res.status(300).json({
      error: 'user not authenticated',
    });
  }
}
