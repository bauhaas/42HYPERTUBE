import {
  create,
  findAll,
  findOne,
  findOneByEmail,
  patch,
  verifypassword,
} from '#services/user';
import { NotFoundError } from '#utils/errorHandler';

import db from '../../../models/index.js';

beforeAll(async () => {
  // Sync all models with database
  // force: true drops the db
  await db.sequelize.sync({ force: true });
});

afterAll(async () => {
  await db.sequelize.close(); // Close database connection
});

describe('findAll', () => {
  it('should return all users', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe@example.com',
    });

    const createdUser2 = await db.users.create({
      firstName: 'John2',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe2@example.com',
    });

    // Call the findAll function
    const users = await findAll();
    console.log(users);
    // Expect to have two users and that their ids are 1 and 2
    expect(users.length).toEqual(2);
    expect(users[0].id).toEqual(1);
    expect(users[1].id).toEqual(2);
  });
});

describe('findOne', () => {
  it('should return the user with the specified id', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe@example.com',
    });

    // Call the findOne function with the user's id
    const foundUser = await findOne(createdUser.id);
    console.log(foundUser);
    // Expect the found user to have the same id as the created user
    expect(foundUser.id).toEqual(createdUser.id);
  });

  it('should throw a NotFoundError if no user with the specified id is found', async () => {
    // Call the findOne function with an invalid id
    await expect(findOne(123456)).rejects.toThrow(NotFoundError);
  });
});

describe('findOneByEmail', () => {
  it('should return the user with the specified email', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe3@example.com',
    });

    // Call the findOneByEmail function with the user's email
    const foundUser = await findOneByEmail(createdUser.email);
    // Expect the found user to have the same id as the created user
    expect(foundUser.id).toEqual(createdUser.id);
  });

  it('should throw a NotFoundError if no user with the specified email is found', async () => {
    // Call the findOneByEmail function with an invalid email
    await expect(findOneByEmail('notfound@example.com')).rejects.toThrow(
      NotFoundError,
    );
  });
});

describe('create', () => {
  it('should return the new user', async () => {
    // Create a user in the database
    const createdUser = await create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe4@example.com',
    });

    // Expect the found user to have the same id as the created user
    expect(createdUser.firstName).toEqual('John');
    expect(createdUser.lastName).toEqual('Doe');
    expect(createdUser.email).toEqual('johndoe4@example.com');
  });
});

describe('verifypassword', () => {
  it('should return true if the passwords are equal', async () => {
    // Create a user in the database
    const createdUser = await findOneByEmail('johndoe4@example.com');

    console.log(createdUser);
    // Expect the password is correctly hashed and can validate auth
    expect(
      await verifypassword('simplePassword', createdUser.password),
    ).toEqual(true);
  });

  it('should return false if the password given is not correct', async () => {
    // Call the findOneByEmail function to get the hash
    const user = await findOneByEmail('johndoe4@example.com');
    await expect(
      await verifypassword('simplePassword123', user.password),
    ).toEqual(false);
  });
});

describe('patch', () => {
  it('should return the number of affected rows', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe2@example.com',
    });

    // Call the patch function with the user's id
    const patchedUserId = await patch(createdUser.id, {
      firstName: 'Matt',
      password: 'simplePassword123',
    });

    const foundUser = await findOne(createdUser.id);

    // Expect user to have modified data
    expect(foundUser.firstName).toEqual('Matt');
  });

  it('should have patched the user', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe2@example.com',
    });

    // Call the patch function with the user's id
    await patch(createdUser.id, {
      firstName: 'Matt',
    });

    const foundUser = await findOne(createdUser.id);

    // Expect the found user to have the same id as the created user
    expect(foundUser.firstName).toEqual('Matt');
  });

  it('should throw a NotFoundError if no user with the specified id is found', async () => {
    // Call the patch function with an invalid id
    await expect(patch(123456, { firstName: 'whatever' })).rejects.toThrow(
      NotFoundError,
    );
  });
});
