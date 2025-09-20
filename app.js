const express = require('express');

const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Express app listening for requests on localhost:${PORT}...`);
});
