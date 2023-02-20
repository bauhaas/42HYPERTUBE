import dotenv from 'dotenv'
dotenv.config();

import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../swagger.js';
import session from 'express-session';
import express from 'express';

const app = express();

import passport from 'passport';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/login', function(req, res){
  res.send("login");
});

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) {
      // handle error
    }

    res.redirect('/');
  });
});

import googleStrategy from './strategies/google.js';
import githubStrategy from './strategies/github.js';
import facebookStrategy from './strategies/facebook.js'
import fortytwoStrategy from './strategies/fortytwo.js'
import authRoutes from './routes/auth/index.js';

passport.use(googleStrategy);
passport.use(githubStrategy);
passport.use(facebookStrategy);
passport.use(fortytwoStrategy);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(process.env.GOOGLE_CLIENT_ID)
  console.log(process.env.GITHUB_CLIENT_ID)
});

//add 'auth' here instead of on every routes in the auth index.js
app.use(authRoutes)
