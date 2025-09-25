const db = require('../db/queries');

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
  postForm: (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: new Date(),
    });

    res.redirect('/');
  },
};
