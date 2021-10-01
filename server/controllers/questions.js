const pool = require('../../db');

module.exports = {
  get: (req, res) => {
    const pageOffset = ((req.query.page - 1) || 0) * ((req.query.count) || 5);
    const count = ((req.query.count) || 5)
    params = [req.params.product_id, pageOffset, count];

    const queryString = 'SELECT * FROM questions WHERE product_id = $1 LIMIT $3 OFFSET $2'

    pool.query(queryString, params)
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },

  post: (req, res) => {
    const date = new Date()
    const dateMilis = date.getTime()

    const params = [req.params.product_id, req.body.body, dateMilis, req.body.name, req.body.email]

    const queryString =' \
    INSERT INTO questions (product_id, body, date_written, asker_name, asker_email) \
    VALUES($1, $2, $3, $4, $5)'

    pool.query(queryString, params)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },

  putHelpful: (req, res) => {
    const params = [req.params.question_id]
    const queryString = ' UPDATE questions SET helpful = helpful + 1 WHERE id = $1'
    pool.query(queryString, params)
      .then((results) => {
        res.status(201).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  putReport: (req, res) => {
    const params = [req.params.question_id]
    const queryString = `UPDATE questions SET reported = ${true} WHERE id = $1`

    pool.query(queryString, params)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
}