import { Strategy as FortyTwoStrategy } from 'passport-42';
import dotenv from 'dotenv'
dotenv.config();


export default new FortyTwoStrategy({
    clientID: process.env.FORTYTWO_APP_ID,
    clientSecret: process.env.FORTYTWO_APP_SECRET,
    callbackURL: "/auth/42/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile, accessToken);
    return cb(null, profile);
    // User.findOrCreate({ fortytwoId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
);