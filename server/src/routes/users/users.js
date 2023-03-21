import express from 'express';

import logger from '#config/logger';
import users from '#controllers/user';
import requireAuth from '#middlewares/authentication';
import { errorHandler, upload } from '#services/user';

const router = express.Router();

router.get('/', users.findAll);
router.post('/', users.create);
router.get('/:id', users.findOne);
router.patch('/:id', users.patch);
router.put('/:id/picture', upload.single('file'), errorHandler, users.picture);

export default router;
