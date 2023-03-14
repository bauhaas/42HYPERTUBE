import { findOne, patch } from '#services/user';
import { NotFoundError } from '#utils/errorHandler';

import db from '../../../models/index.js';

beforeAll(async () => {
  await db.sequelize.sync(); // Sync all models with database
});

afterAll(async () => {
  await db.sequelize.close(); // Close database connection
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
    });

    await findOne(createdUser.id);

    // Expect the found user to have the same id as the created user
    expect(patchedUserId[0]).toEqual(1);
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
