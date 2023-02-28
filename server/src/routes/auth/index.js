import express from 'express';

import facebookAuth from './facebook.js';
import fortytwoAuth from './fortytwo.js';
import githubAuth from './github.js';
import googleAuth from './google.js';

const router = express.Router();

router.use('/facebook', facebookAuth);
router.use('/42', fortytwoAuth);
router.use('/github', githubAuth);
router.use('/google', googleAuth);

export default router;
