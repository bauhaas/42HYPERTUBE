import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';

import dbConfig from '#config/db';
import logger from '#config/logger';
import authRoutes from '#routes/auth';
import commentsRoutes from '#routes/comments';
import usersRoutes from '#routes/users';
import facebookStrategy from '#strategies/facebook';
import fortytwoStrategy from '#strategies/fortytwo';
import githubStrategy from '#strategies/github';
import googleStrategy from '#strategies/google';
import local from '#strategies/local';

import swaggerDocument from '../swagger.js';
import db from './models/index.js';

dotenv.config();

const app = express();
app.use(cors());

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app.get('/login', function (req, res) {
  res.send('login page lol');
});

app.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      // handle error
    }
    res.redirect('/');
  });
});

passport.use(googleStrategy);
passport.use(githubStrategy);
passport.use(facebookStrategy);
passport.use(fortytwoStrategy);
passport.use(local);

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser((user, done) => {
  console.log(user, 'SERIALIZE');
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('deserializeUser called with id:', id);
  try {
    const user = await db.users.findByPk(id);
    console.log('Deserialized user:', user); // add this line
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

app.use((req, res, next) => {
  logger.debug('Session middleware called');
  next();
});

// Set up the session middleware
const sessionMiddleware = session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    domain: 'localhost',
    httpOnly: true,
    secure: false,
  },
});

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/comments', commentsRoutes);

const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
};

app.get('/t', requireAuth, function (req, res) {
  res.status(200).send('test');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(dbConfig.DB, port);
  logger.info(`Server running at http://localhost:${port}`);
});
