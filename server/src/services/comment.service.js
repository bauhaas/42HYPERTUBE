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
  const user = await db.users.findByPk(commentData.UserId);
  if (!user) {
    throw new NotFoundError('User does not exist');
  }
  const newComment = await db.comments.create(commentData);
  return newComment;
};

export const deleteById = async (id) => {
  logger.debug(id, 'DELETE');

  const comment = await db.users.findByPk(id);
  if (!comment) {
    throw new NotFoundError('Comment does not exist');
  }
  const deletedRtn = await db.comments.destroy({
    where: {
      id: id,
    },
  });
  return deletedRtn;
};
