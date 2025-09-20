const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.use((req, res, next) => {
  res.locals.title = 'Mini Messageboard';
  next();
});

router.get('/new', controller.getForm);
router.post('/new', controller.postForm);
router.get('/', controller.get);

module.exports = router;
