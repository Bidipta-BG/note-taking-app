const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'real_times_node',
    password: '123456Bikash',
    port: 5432,
});

module.exports = pool;
