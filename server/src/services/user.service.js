import db from '../models/index.js';
import { NotFoundError } from '#utils/errorHandler';

export const findAll = async () => {
  const data = await db.users.findAll();
  return data;
};

export const findOne = async (id) => {
  const data = await db.users.findByPk(id);
  if (!data) {
    throw new NotFoundError('User not found');
  }
  return data;
};
