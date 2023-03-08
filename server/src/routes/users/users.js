import express from 'express';

import logger from '#config/logger';

import users from '../../controllers/user.controller.js';

const router = express.Router();

// Require authentication for /GET users
const requireAuth = (req, res, next) => {
  logger.info(req.isAuthenticated());
  logger.info(req.user);
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send('Unauthorized');
};

router.get('/', requireAuth, users.findAll);
router.get('/:id', users.findOne);
router.post('/', users.create);

export default router;
