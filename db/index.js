const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'intrepid1',
  database: 'questions_answers',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;