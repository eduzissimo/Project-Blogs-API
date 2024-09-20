const postRouter = require('express').Router();
const postController = require('../controller/post.controller');
const { validatePost } = require('../middleware/post.middleware');
const Token = require('../middleware/token.middleware');

postRouter.post('/', Token.isValidToken, validatePost, postController.createPost);

module.exports = postRouter;