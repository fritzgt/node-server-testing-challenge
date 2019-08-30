// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
