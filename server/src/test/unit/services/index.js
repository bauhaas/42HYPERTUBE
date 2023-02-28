import { DataTypes, Sequelize } from 'sequelize';

import userModel from '#models/user';

export const setup_db = async (db_path) => {
  const sequelizeContext = new Sequelize({
    dialect: 'sqlite',
    storage: db_path,
  });

  try {
    await sequelizeContext.authenticate();
  } catch (err) {
    throw err;
  }
  const Users = userModel(sequelizeContext, Sequelize);
  await Users.sync();
};
