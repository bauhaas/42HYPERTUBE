import logger from '#config/logger';

class BadRequestError extends Error {
  //400
  constructor(message) {
    super(message);
  }
}

class UnauthorizedError extends Error {
  //401
  constructor(message) {
    super(message);
  }
}

class ForbiddenError extends Error {
  //403
  constructor(message) {
    super(message);
  }
}

class NotFoundError extends Error {
  //404
  constructor(message) {
    super(message);
  }
}

class InternalServerError extends Error {
  //500
  constructor(message) {
    super(message);
  }
}

const sendErrorResponse = (res, err) => {
  logger.error(err.message);
  if (err instanceof BadRequestError) return res.status(400).send(err.message);
  else if (err instanceof UnauthorizedError)
    return res.status(401).send(err.message);
  else if (err instanceof ForbiddenError)
    return res.status(403).send(err.message);
  else if (err instanceof NotFoundError)
    return res.status(404).send(err.message);
  else return res.status(500).send(err);
};

export {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  sendErrorResponse,
};
