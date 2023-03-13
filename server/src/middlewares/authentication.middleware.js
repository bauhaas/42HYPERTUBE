import logger from '#config/logger';

const requireAuth = (req, res, next) => {
  // logger.info(req.isAuthenticated());
  // logger.info(req.user);
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
};

export default requireAuth;
