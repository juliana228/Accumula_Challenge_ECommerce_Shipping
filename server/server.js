const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const cors = require('cors');
const itemController = require('./controllers/itemController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

//define route handlers

app.get('/items', itemController.getAllItems, (req, res, next) => {
  return res.status(200).json(res.locals.allItems);
});

//catch-all error handler
app.get('*', (req, res) => {
  return res.status(404).send('Unable to fulfill client request.');
});

//global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
