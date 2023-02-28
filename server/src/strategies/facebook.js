import dotenv from 'dotenv';
import { Strategy as FacebookStrategy } from 'passport-facebook';

dotenv.config();

export default new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['email'],
  },
  function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile, accessToken);
    return cb(null, profile);
  },
);
