module.exports = {
  PG_HOST: process.env.DATABASE_SERVICE_NAME,
  PG_PORT: 5432,
  PG_USER: process.env.POSTGRESQL_USER,
  PG_PASSWORD: process.env.POSTGRESQL_PASSWORD,
  PG_DATABASE: process.env.POSTGRESQL_DATABASE,
  PORT: process.env.PORT || 4000,
};
