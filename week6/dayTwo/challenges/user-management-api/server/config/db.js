const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.l',
        port: 5432,
        user: 'postgres',
        database: 'user_management_db'
    }
});

module.exports = db;