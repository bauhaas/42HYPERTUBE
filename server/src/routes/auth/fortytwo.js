import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/',
  passport.authenticate('42'));

router.get('/callback',
  passport.authenticate('42', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

export default router;