import db from '../models/index.js';
import { NotFoundError } from '#utils/errorHandler';
import logger from '#config/logger';

export const findAll = async () => {
  const users = await db.users.findAll();
  return users;
};

export const findOne = async (id) => {
  const user = await db.users.findByPk(id);
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

export const create = async (userData) => {
  const newUser = await db.users.create(userData);
  return newUser;
};
