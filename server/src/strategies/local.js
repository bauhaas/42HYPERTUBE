import dotenv from 'dotenv';
import { Strategy as LocalStrategy } from 'passport-local';

import logger from '#config/logger';
import * as userService from '#services/user';

dotenv.config();

export default new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async function (username, password, done) {
    logger.debug('local authentication');
    const user = await userService.findOneByEmail(username);

    logger.debug('found user for local authentication');
    if (!user) {
      return done(null, false);
    }

    const hasValidPassword = await userService.verifypassword(
      password,
      user.password,
    );

    logger.debug('has valid password ?', hasValidPassword);

    if (!hasValidPassword) {
      logger.debug('invalid pass');
      return done(null, false);
    }

    return done(null, user);
  },
);
