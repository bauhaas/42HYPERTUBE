import express from 'express';
import passport from 'passport';

const router = express.Router();
const CLIENT_HOME_PAGE_URL = 'http://localhost:5173/home';
const CLIENT_SIGN_PAGE_URL = 'http://localhost:5173/';

router.get('/', passport.authenticate('42'));

router.get(
  '/callback',
  passport.authenticate('42', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: CLIENT_SIGN_PAGE_URL,
  }),
);
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.redirect('/');
// });

export default router;
