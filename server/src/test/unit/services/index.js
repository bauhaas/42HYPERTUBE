import { Sequelize, DataTypes } from 'sequelize';
// import userModel from '#models/user';

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

  const Table1 = sequelizeContext.define(
    'table1',
    {
      fieldName_1: {
        type: DataTypes.STRING,
      },
    },
    { tableName: 'table1' },
  );

  const Table2 = sequelizeContext.define(
    'table2',
    {
      fieldName_1: {
        type: DataTypes.STRING,
      },
    },
    { tableName: 'table2' },
  );

  Table1.hasMany(Table2);

  // const Users = userModel(sequelizeContext, Sequelize);
  // console.log(typeof(Users));
  // await Users.sync();
  await Table1.sync();
  await Table2.sync();
};
