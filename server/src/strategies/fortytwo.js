import dotenv from 'dotenv';
import { Strategy as FortyTwoStrategy } from 'passport-42';

import logger from '#config/logger';
import * as userService from '#services/user';

dotenv.config();

export default new FortyTwoStrategy(
  {
    clientID: process.env.FORTYTWO_APP_ID,
    clientSecret: process.env.FORTYTWO_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/42/callback',
  },
  async function (accessToken, refreshToken, profile, cb) {
    const user = await userService.findOrCreate(
      'fortytwo',
      profile.id,
      profile.emails[0].value,
      profile.displayName.split(' ')[0],
      profile.displayName.split(' ')[1],
    );
    return cb(null, user);
  },
);
