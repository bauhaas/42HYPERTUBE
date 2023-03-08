import dotenv from 'dotenv';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import logger from '#config/logger';
import * as userService from '#services/user';

dotenv.config();

export default new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['email', 'displayName'],
  },
  async function (accessToken, refreshToken, profile, cb) {
    console.log(profile, accessToken);
    const user = await userService.findOrCreate(
      'facebook',
      profile.id,
      profile.emails[0].value,
      profile.displayName.split(' ')[0],
      profile.displayName.split(' ')[1],
    );
    logger.debug(user);
    return cb(null, profile);
  },
);
