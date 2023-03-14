import logger from '#config/logger';
import * as userService from '#services/user';
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

  patch: async (req, res) => {
    try {
      // verify that jwt/auth's id corresponds to id
      logger.debug(req.params);
      logger.debug(req.body);
      const id = req.params.id;
      const patchInfo = req.body;
      const data = await userService.patch(id, patchInfo);
      res.status(200).send(data);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },
};
