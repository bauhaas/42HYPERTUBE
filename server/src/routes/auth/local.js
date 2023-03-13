import express from 'express';
import passport from 'passport';

import logger from '#config/logger';

const router = express.Router();

const CLIENT_HOME_PAGE_URL = 'http://localhost:5173/home';
const CLIENT_SIGN_PAGE_URL = 'http://localhost:5173/';

router.post(
  '/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function (req, res) {
    logger.debug('success local auth');
    res.status(200).send({ done: true });
  },
);

export default router;
