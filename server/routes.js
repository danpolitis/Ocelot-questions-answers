const router = require('express').Router();
const controllers = require('./controllers');

router.route('/questions/:question_id/answers')
  .get(controllers.answers.get)
  .post(controllers.answers.post)

router.route('/answers/:answer_id/helpful')
  .put(controllers.answers.putHelpful)

router.route('/answers/:answer_id/report')
  .put(controllers.answers.putReport)

router.route('/questions/:product_id')
  .get(controllers.questions.get)
  .post(controllers.questions.post)

router.route('/questions/:question_id/helpful')
  .put(controllers.questions.putHelpful)

router.route('/questions/:question_id/report')
  .put(controllers.questions.putReport)

module.exports = router;