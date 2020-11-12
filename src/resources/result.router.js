const router = require('express').Router();
const { OK, NO_CONTENT } = require('http-status-codes');
const Result = require('./result.model');
const resultService = require('./result.service');
// const resultSchemas = require('./result.schema');
// const validator = require('../../validator/validator');
const catchErrors = require('../error/catchError');

router.route('/').get(
  catchErrors(async (req, res) => {
    const result = await resultService.getAll();
    res.status(OK).json(result.map(Result.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const requestData = req.body;
    const result = await resultService.createResult(requestData);
    res.status(OK).json(Result.toResponse(result));
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const requestData = req.body;
    const result = await resultService.updateResult(id, requestData);
    res.status(OK).json(Result.toResponse(result));
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    await resultService.deleteResult(id);
    res
      .status(NO_CONTENT)
      .json(`User with id ${id} has been succesfully deleted`);
  })
);

module.exports = router;
