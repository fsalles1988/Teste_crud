// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "postgres",
      user: "postgres",
      password: "5031"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};

 