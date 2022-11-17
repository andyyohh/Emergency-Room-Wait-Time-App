const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.status(200).send('test worked');
})

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(port, () => {
  console.log(`Server is listening on ${port}.`)
});

module.exports = app;
