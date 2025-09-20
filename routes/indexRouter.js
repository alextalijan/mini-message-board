const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.use((req, res, next) => {
  res.locals.title = 'Mini Messageboard';
  res.locals.messages = messages;
  next();
});

router.get('/', controller.get);

module.exports = router;
