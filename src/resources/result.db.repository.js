const Result = require('./result.model');

const getAll = async () => {
  return Result.find({});
};

const createResult = async newResult => {
  return Result.create(newResult);
};

const updateResult = async (id, dataForUpdate) => {
  const updatedResult = await Result.findByIdAndUpdate(id, dataForUpdate, {
    new: true
  });
  if (updatedResult === null) {
    throw new Error(`User with id ${id} not found`);
  }
  return updatedResult;
};

const deleteResult = async id => {
  const deletedResult = await Result.findOneAndDelete({ _id: id });
  if (deletedResult === null) {
    throw new Error(`Result with id ${id} not found`);
  }
  return deletedResult;
};


module.exports = {
  getAll,
  createResult,
  updateResult,
  deleteResult
};
