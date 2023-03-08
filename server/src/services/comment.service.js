import logger from '#config/logger';
import {
  NotFoundError,
  sendErrorResponse,
  UnauthorizedError,
} from '#utils/errorHandler';

import db from '../models/index.js';

export const findAll = async () => {
  const comments = await db.comments.findAll();
  return comments;
};

export const create = async (commentData) => {
  logger.debug(commentData, 'CREATE');
  const newComment = await db.comments.create(commentData);
  return newComment;
};
