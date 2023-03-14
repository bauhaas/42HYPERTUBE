import { Sequelize } from 'sequelize';

import dbConfig from '#config/db';
import logger from '#config/logger';
import commentModel from '#models/comment';
import movieModel from '#models/movie';
import userModel from '#models/user';

logger.debug(dbConfig.DB);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: process.env.NODE_ENV === 'test' ? dbConfig.HOST_TEST : dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
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

// Define association between movies and comments
// db.movies.hasMany(db.comments, { as: 'comments' });
// db.comments.belongsTo(db.movies, { foreignKey: 'MovieId' });

// Define association between users and comments
db.users.hasMany(db.comments, { as: 'comments' });
db.comments.belongsTo(db.users, { foreignKey: 'UserId' });

export default db;
