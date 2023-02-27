// import { Sequelize } from 'sequelize';
// import userModel from '../../../models/user.model.js';
// import { findAll } from '../../../services/user.service.js';

// // import db from "./models/index.js";
// // db.sequelize.sync()
// //   .then(() => {
// //     console.log("Synced db.");
// //   })
// //   .catch((err) => {
// //     console.log("Failed to sync db: " + err.message);
// //   });

// const sequelize = new Sequelize('sqlite::memory:', {logging: true});

// describe('findAll', () => {
//   beforeAll(async () => {
//     await sequelize.authenticate();
//     await sequelize.sync({ force: true });
//   });

//   afterAll(async () => {
//     await sequelize.close();
//   });

//     test('should create user table', async () => {
//       try{
//         const tableNames = await sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'", { type: sequelize.QueryTypes.SELECT });
//         console.log(tableNames);

//     // const result = await sequelize.getQueryInterface().describeTable('User');
//     // expect(result).toBeDefined();
//     // expect(result).toHaveProperty('name');
//     // expect(result).toHaveProperty('email');
//       } catch (error){
//         console.error(error);
//       }

//   });

//   test('should return empty array when no users in database', async () => {
//     const users = await findAll();
//     expect(users).toEqual([]);
//   });

// // test('should return all users in database', async () => {
// //   try {
// //     const usersData = [
// //       { firstName: 'John Doe', email: 'john@example.com' },
// //       { firstName: 'Jane Doe', email: 'jane@example.com' }
// //     ];

// //     console.log(usersData);
// //     await userModel(sequelize, Sequelize).bulkCreate(usersData);

// //     const users = await findAll();

// //     console.log(users, 'test');
// //     expect(users).toHaveLength(2);
// //     expect(users[0].name).toEqual(usersData[0].name);
// //     expect(users[1].name).toEqual(usersData[1].name);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // });
// });
