import { create, deleteById, findAll } from '#services/comment';
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
  it('should return all comments', async () => {
    // Create a user in the database
    await db.users.create({
      firstName: 'John',
      lastName: 'Doe',
      password: 'simplePassword',
      email: 'johndoe@example.com',
    });

    // Create a comment in the database
    await db.comments.create({
      content: 'basic content',
      UserId: 1,
      MovieId: 1,
    });

    // Call the findAll function
    const comments = await findAll();
    console.log('AAAA', comments);
    console.log(comments.length);
    console.log(comments[0].id);
    // Expect to have one comments and that its id is 1
    expect(comments.length).toEqual(1);
    expect(comments[0].id).toEqual(1);
  });
});

describe('create', () => {
  it('should return created comment', async () => {
    // Create a comment in the database
    const createdComment = await create({
      content: 'basic content',
      UserId: 1,
      MovieId: 1,
    });

    // Expect to have created the comment
    expect(createdComment.content).toEqual('basic content');
  });

  it('should throw a NotFoundError if no user with the specified id is found', async () => {
    // Call the create function with an invalid UserId
    await expect(
      create({
        content: 'basic content',
        UserId: 3,
        MovieId: 1,
      }),
    ).rejects.toThrow(NotFoundError);
  });
});

describe('deleteById', () => {
  it('should delete comment', async () => {
    // Create a comment in the database
    await deleteById(1);
    const comments = await findAll();
    // Expect to have deleted the comment
    expect(comments.length).toEqual(1);
  });

  it('should throw a NotFoundError if no comment with the specified id is found', async () => {
    // Call the patch function with an invalid id
    await expect(deleteById(10)).rejects.toThrow(NotFoundError);
  });
});
