import express from "express";

import googleAuth from './google.js';
import githubAuth from './github.js';
import facebookAuth from './facebook.js';
import fortytwoAuth from './fortytwo.js';

const router = express.Router()

router.use('/google', googleAuth);
router.use('/facebook', facebookAuth);
router.use('/github', githubAuth);
router.use('/42', fortytwoAuth);

export default router;