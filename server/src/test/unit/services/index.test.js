import { DataTypes, Sequelize } from 'sequelize';

import { setup_db } from './';

jest.mock('sequelize', () => {
  const mSequelize = {
    authenticate: jest.fn(),
    define: jest.fn(),
  };
  const actualSequelize = jest.requireActual('sequelize');
  return {
    Sequelize: jest.fn(() => mSequelize),
    DataTypes: actualSequelize.DataTypes,
  };
});

const mSequelizeContext = new Sequelize();

describe('db setup', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should setup db correctly', async () => {
    const usersTable = { sync: jest.fn() };
    jest.mocked(mSequelizeContext.define).mockImplementation((modelName) => {
      switch (modelName) {
        case 'User':
          return usersTable;
      }
    });
    await setup_db(':memory:');
    expect(Sequelize).toBeCalledWith({
      dialect: 'sqlite',
      storage: ':memory:',
    });
    expect(mSequelizeContext.authenticate).toBeCalled();
    expect(usersTable.sync).toBeCalledTimes(1);
  });
});
