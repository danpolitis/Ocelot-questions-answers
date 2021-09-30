const pool = require('../../db');

module.exports = {
  get: (req, res) => {
    params = [req.params.question_id];
    const queryString = ' \
    SELECT answers.*, array_remove(array_agg(answer_photos.url), NULL) AS photos FROM answers LEFT JOIN answer_photos ON \(answer_photos.answer_id = answers.id) WHERE answers.question_id = $1 GROUP BY answers.id;'

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
    params = [req.params.question_id, req.body.body, dateMilis, req.body.name, req.body.email, req.body.photos];
    let queryString;

    if (req.body.photos !== null) {
      queryString = '\
      WITH new_answer as ( \
        INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email) \
        VALUES($1, $2, $3, $4, $5) \
        returning id \
      ) \
      INSERT INTO answer_photos (answer_id, url) \
      VALUES ((SELECT id FROM new_answer), $6) '
    } else {
      queryString = ' \
      INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email) \
      VALUES($1, $2, $3, $4, $5); \
      '
    }

    pool.query(queryString, params)
      .then((results) => {
        res.status(201).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}