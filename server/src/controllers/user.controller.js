import * as userService from '#services/user';
import {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  sendErrorResponse,
} from '#utils/errorHandler';
import logger from '#config/logger';

export default {
  findAll: async (req, res) => {
    try {
      const users = await userService.findAll();
      res.status(200).send(users);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },

  findOne: async (req, res) => {
    try {
      logger.debug(req.params);
      const id = req.params.id;
      const user = await userService.findOne(id);
      res.status(200).send(user);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },

  create: async (req, res) => {
    try {
      logger.debug(req.body);
      const newUser = req.body;
      const data = await userService.create(newUser);
      res.status(201).send(data);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },
};
