import * as userService from "../services/user.service.js";

import {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  sendErrorResponse
} from '../utils/errorHandler.js';

export default {
  findAll: async (req, res) => {
    try {
      const data = await userService.findAll();
      res.status(200).send(data);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  },

  findOne: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await userService.findOne(id);
      res.status(200).send(data);
    } catch (err) {
      sendErrorResponse(res, err);
    }
  }
}