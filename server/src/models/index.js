import { Sequelize } from 'sequelize';

import dbConfig from '#config/db';
import logger from '#config/logger';
import commentModel from '#models/comment';
import movieModel from '#models/movie';
import userModel from '#models/user';

logger.debug(dbConfig.DB);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: process.env.NODE_ENV === 'test' ? 5433 : 5432,
  // logging: process.env.NODE_ENV === 'test' ? false : true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, Sequelize);
db.comments = commentModel(sequelize, Sequelize);
db.movies = movieModel(sequelize, Sequelize);

export default db;
