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

module.exports = {
  get: (req, res) => {
    res.render('index', {
      title: res.locals.title,
      messages,
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
