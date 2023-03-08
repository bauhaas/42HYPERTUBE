import express from 'express';
import passport from 'passport';

import logger from '#config/logger';

const router = express.Router();
const CLIENT_HOME_PAGE_URL = 'http://localhost:5173/home';
const CLIENT_SIGN_PAGE_URL = 'http://localhost:5173/';

router.get('/', passport.authenticate('42'));

router.get(
  '/callback',
  passport.authenticate('42', { failureRedirect: 'http://localhost:5173' }),
  function (req, res) {
    logger.debug('success 42 auth');
    res.redirect('http://localhost:5173/home');
  },
);
export default router;
