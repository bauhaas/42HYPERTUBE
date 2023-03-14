import util from 'util';

import bcrypt from 'bcryptjs';
import multer from 'multer';
import { Op } from 'sequelize';

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

export const findOrCreate = async (
  provider,
  id,
  email,
  firstName,
  lastName,
) => {
  const field = `${provider}Id`;

  const user = await db.users.findOne({
    where: {
      [Op.or]: [
        { githubId: id },
        { facebookId: id },
        { fortytwoId: id },
        { googleId: id },
      ],
    },
  });

  if (!user) {
    logger.debug(`must create via ${provider} user`);
    const newUser = await db.users.create({
      [field]: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: 'test',
    });
    return newUser;
  }

  return user;
};

export const create = async (userData) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(userData.password, salt);
  userData.password = hash;
  logger.debug(userData, 'CREATE');
  const newUser = await db.users.create(userData);
  return newUser;
};

export const patch = async (id, patchData) => {
  const user = await db.users.findByPk(id);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  if (patchData.password !== undefined) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(patchData.password, salt);
    patchData.password = hash;
  }
  logger.debug(patchData, 'PATCH');
  const newUser = await db.users.update(patchData, {
    where: { id: id },
  });
  logger.debug(newUser, 'PATCH');
  return newUser;
};

const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const upload = multer({
  dest: 'uploads/',
  fileFilter: async (req, file, cb) => {
    if (!allowedTypes.includes(file.mimetype)) {
      return cb({ message: 'Invalid file type', status: 400 }, false);
    }
    cb(null, true);
  },
});

// export const uploadFileMiddleware = util.promisify(upload);

export const errorHandler = (error, req, res, next) => {
  if (error) {
    return res.status(error.status || 500).send({ message: error.message });
  }
  next();
};

export const picture = async (id, filePath) => {
  // Save the picture's path to the database
  const result = await db.users.update(filePath, {
    where: { id: id },
  });
  // Send the file back to the client
  return result;
};
