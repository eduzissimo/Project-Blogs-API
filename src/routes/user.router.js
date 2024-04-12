const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const { validateUser } = require('../middleware/user.middleware');
const Token = require('../middleware/token.middleware');

userRouter.post('/', validateUser, userController.addUser);
userRouter.get('/', Token.isValidToken, userController.getAllUsers);
userRouter.get('/:id', Token.isValidToken, userController.getUserById);

module.exports = userRouter;