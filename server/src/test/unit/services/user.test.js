import { findOne } from '#services/user';
import { NotFoundError } from '#utils/errorHandler';

import db from '../../../models/index.js';

describe('findOne', () => {
  beforeAll(async () => {
    await db.sequelize.sync(); // Sync all models with database
  });

  afterAll(async () => {
    await db.sequelize.close(); // Close database connection
  });

  it('should return the user with the specified id', async () => {
    // Create a user in the database
    const createdUser = await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
    });

    // Call the findOne function with the user's id
    const foundUser = await findOne(createdUser.id);

    // Expect the found user to have the same id as the created user
    expect(foundUser.id).toEqual(createdUser.id);
  });

  it('should throw a NotFoundError if no user with the specified id is found', async () => {
    // Call the findOne function with an invalid id
    await expect(findOne(123456)).rejects.toThrow(NotFoundError);
  });
});
