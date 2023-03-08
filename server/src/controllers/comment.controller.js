import logger from '#config/logger';
import * as commentService from '#services/comment';
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  sendErrorResponse,
  UnauthorizedError,
} from '#utils/errorHandler';

export default {
  findAll: async (req, res) => {
    try {
      const comments = await commentService.findAll();
      res.status(200).send(comments);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },

  create: async (req, res) => {
    try {
      logger.debug(req.body);
      const newComment = req.body;
      const data = await commentService.create(newComment);
      res.status(201).send(data);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },
};
