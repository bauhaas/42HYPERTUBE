import express from 'express';

import comments from '../../controllers/comment.controller.js';

const router = express.Router();

router.get('/', comments.findAll);
router.post('/', comments.create);
router.delete('/:id', comments.delete);

export default router;
