const dbConfig = {
  HOST: 'postgres',
  HOST_TEST: 'test_postgres',
  PORT: 5432,
  USER: 'admin',
  PASSWORD: 'admin',
  DB: process.env.DB || 'nodejs',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
