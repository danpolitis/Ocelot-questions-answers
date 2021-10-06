const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'intrepid1',
  database: 'questions_answers',
  host: 'ec2-3-101-7-116.us-west-1.compute.amazonaws.com',
  port: 5432,
});

module.exports = pool;