import express from "express";

import googleAuth from './google.js';
import githubAuth from './github.js';
import facebookAuth from './facebook.js';
import fortytwoAuth from './fortytwo.js';

const router = express.Router()

router.use('/auth/google', googleAuth);
router.use('/auth/facebook', facebookAuth);
router.use('/auth/github', githubAuth);
router.use('/auth/42', fortytwoAuth);

export default router;