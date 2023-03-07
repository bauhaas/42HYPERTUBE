import bcrypt from 'bcryptjs';

import logger from '#config/logger';
import {
  NotFoundError,
  sendErrorResponse,
  UnauthorizedError,
} from '#utils/errorHandler';

import db from '../models/index.js';

export const findAll = async () => {
  const users = await db.users.findAll();
  return users;
};

export const findOne = async (id) => {
  const user = await db.users.findByPk(id, {
    include: [{ model: db.comments, as: 'comments' }],
  });
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

export const findOneByEmail = async (email) => {
  const user = await db.users.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

export const verifypassword = async (password, storedPassword) => {
  const isValid = await bcrypt.compare(password, storedPassword);

  if (!isValid) {
    return false;
  }
  return true;
};

export const create = async (userData) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(userData.password, salt);
  userData.password = hash;
  logger.debug(userData, 'CREATE');
  const newUser = await db.users.create(userData);
  return newUser;
};
