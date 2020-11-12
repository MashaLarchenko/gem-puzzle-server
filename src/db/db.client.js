const resultService = require('../resources/result.service');

const mongoose = require('mongoose');
const resultData = require('./result.defaultDbData');

const connectToDb = (cb) => {
  mongoose.connect('mongodb+srv://admin:12345admin@gem-puzzle.ph9w5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log(" we're connected!");
    resultData.forEach((result) => resultService.createResult(result));
    cb();
  });
};

module.exports = connectToDb;
