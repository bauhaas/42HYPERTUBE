import dotenv from 'dotenv';
import { Strategy as GitHubStrategy } from 'passport-github2';

import logger from '#config/logger';
import * as userService from '#services/user';

dotenv.config();

export default new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback',
  },
  async function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    const user = await userService.findOrCreate(
      'github',
      profile.id,
      profile.emails[0].value,
      profile.displayName.split(' ')[0],
      profile.displayName.split(' ')[1],
    );
    logger.debug(user);
    return done(null, user);
  },
);
