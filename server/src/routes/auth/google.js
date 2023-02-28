import cors from 'cors';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
  '/',
  cors(),
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  },
);

export default router;
