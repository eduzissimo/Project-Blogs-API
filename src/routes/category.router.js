const categoryRouter = require('express').Router();
const categoryController = require('../controller/category.controller');
const { validateCategory } = require('../middleware/category.middleware');
const Token = require('../middleware/token.middleware');

categoryRouter.post('/', Token.isValidToken, validateCategory, categoryController.addCategory);

module.exports = categoryRouter;