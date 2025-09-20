const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Allows use of form inputs in request body
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Express app listening for requests on localhost:${PORT}...`);
});
