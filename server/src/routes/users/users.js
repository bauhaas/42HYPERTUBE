import express from 'express';

import users from '../../controllers/user.controller.js';

const router = express.Router();

router.get('/', users.findAll);
router.get('/:id', users.findOne);
router.post('/', users.create);

export default router;
