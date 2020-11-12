const express = require('express');
const path = require('path');
const YAML = require('yamljs');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const resultRouter = require('./resources/result.router');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
});

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/result', resultRouter);

// app.use(errors.handleError, (err, req, res, next) => {
//   errors.handleInternalError(err, req, res, next);
// });

module.exports = app;
