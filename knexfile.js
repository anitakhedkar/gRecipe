// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/grecipe_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
