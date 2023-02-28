import { Sequelize } from 'sequelize';
import dbConfig from '#config/db';
import commentModel from '#models/comment';
import userModel from '#models/user';
import movieModel from '#models/movie';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
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

export default db;
