import express from 'express';
import passport from 'passport';

import logger from '#config/logger';

const router = express.Router();

router.get('/', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/callback',
  passport.authenticate('facebook', {
    failureRedirect: 'http://localhost:5173',
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    logger.debug('success facebook auth');
    res.redirect('http://localhost:5173/home');
  },
);

export default router;
