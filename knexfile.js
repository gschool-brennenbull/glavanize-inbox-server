module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/inbox'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/inbox'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
