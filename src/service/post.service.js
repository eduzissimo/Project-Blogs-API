const { BlogPost, PostCategory } = require('../models');
const UserService = require('./user.service');
const CategoryService = require('./category.service');

const createPost = async (payload) => {
  const { title, content, categoryIds, email } = payload;

  const user = await UserService.getUserByEmail(email);

  const categories = await CategoryService.findAll({ where: { id: categoryIds } });

  if (!categories) return { error: 400, message: 'one or more "categoryIds" not found' };

  const post = await BlogPost.create({ title, content });

  await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId: post.id, categoryId })));

  return {
    id: post.id,
    title,
    content,
    userId: user.id,
  };
};

module.exports = {
  createPost,
};
