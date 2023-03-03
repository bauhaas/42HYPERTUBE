import dotenv from 'dotenv';
import { Strategy as LocalStrategy } from 'passport-local';

import * as userService from '#services/user';

dotenv.config();

export default new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async function (username, password, done) {
    const user = await userService.findOneByEmail(username);

    if (!user) {
      return done(null, false);
    }

    const hasValidPassword = await userService.verifypassword(
      password,
      user.password,
    );

    if (!hasValidPassword) {
      return done(null, false);
    }

    return done(null, user);
  },
);
