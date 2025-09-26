const db = require('../db/queries');
const { body, validationResult } = require('express-validator');

validations = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Username cannot be empty.')
    .isLength({ min: 3 })
    .withMessage('Username cannot be shorter than 3 characters.')
    .isLength({ max: 20 })
    .withMessage('Username cannot be longer than 20 characters.'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message cannot be empty.')
    .isLength({ max: 100 })
    .withMessage('Message cannot be longer than 100 characters.'),
];

module.exports = {
  get: async (req, res) => {
    res.render('index', {
      title: res.locals.title,
      messages: await db.getAllMessages(),
    });
  },
  getMessage: async (req, res) => {
    const message = await db.getMessageById(req.params.messageIndex);

    res.render('message', {
      ...message,
    });
  },
  getForm: (req, res) => {
    res.render('form');
  },
  postForm: [
    validations,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.locals.errors = errors.array();
        return res.render('form');
      }

      await db.addMessage(req.body.name, req.body.message);
      res.redirect('/');
    },
  ],
};
