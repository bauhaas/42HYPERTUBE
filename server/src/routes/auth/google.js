import cors from 'cors';
import express from 'express';
import passport from 'passport';

import logger from '#config/logger';

const router = express.Router();

router.get(
  '/',
  cors(),
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173' }),
  function (req, res) {
    logger.debug('success github auth');
    res.redirect('http://localhost:5173/home');
  },
);

export default router;
