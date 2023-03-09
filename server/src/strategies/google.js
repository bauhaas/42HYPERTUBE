import dotenv from 'dotenv';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import logger from '#config/logger';
import * as userService from '#services/user';

dotenv.config();

export default new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  async function (accessToken, refreshToken, profile, cb) {
    const user = await userService.findOrCreate(
      'google',
      profile.id,
      profile.emails[0].value,
      profile.displayName.split(' ')[0],
      profile.displayName.split(' ')[1],
    );
    return cb(null, user);
  },
);
