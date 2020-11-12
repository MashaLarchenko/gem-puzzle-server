const uuid = require('uuid');
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: String,
    step: String,
    time: String,
  },
  { versionKey: false },
);

resultSchema.statics.toResponse = result => {
  const { id, name, step, time } = result;
  return { id, name, step, time  };
};

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;
