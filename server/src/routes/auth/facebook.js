import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  },
);

export default router;
