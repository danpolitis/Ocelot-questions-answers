const server = require('./server');
const PORT = 3003;
const pool = require('../db');

pool.connect((err) => {
  if (err) console.error('db error', err);
  else console.log('Database connected');
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})