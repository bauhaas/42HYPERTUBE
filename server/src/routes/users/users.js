import express from 'express';

import logger from '#config/logger';
import users from '#controllers/user';
import requireAuth from '#middlewares/authentication';

const router = express.Router();

router.get('/', users.findAll);
router.get('/:id', users.findOne);
router.patch('/:id', users.patch);
router.post('/', users.create);

export default router;
