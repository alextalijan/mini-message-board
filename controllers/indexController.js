module.exports = {
  get: (req, res) => {
    res.render('index', {
      title: res.locals.title,
      messages: res.locals.messages,
    });
  },
};
