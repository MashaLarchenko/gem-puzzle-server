const resultRepo = require('./result.db.repository');

const getAll = () => resultRepo.getAll();

const createResult = async result => {
  return resultRepo.createResult(result);
};

const updateResult = (id, param) => resultRepo.updateResult(id, param);

const deleteResult = async id => {
  return resultRepo.deleteResult(id);
};

module.exports = {
  getAll,
  createResult,
  updateResult,
  deleteResult,
};

