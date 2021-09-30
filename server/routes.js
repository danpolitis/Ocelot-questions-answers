const router = require('express').Router();
const controllers = require('./controllers');

router.route('/questions/:question_id/answers')
  .get(controllers.answers.get)
  .post(controllers.answers.post)

module.exports = router;