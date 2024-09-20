const PostService = require('../service/post.service');

const createPost = async (req, res) => {
  const { email } = req.user;
  try {
    const { title, content, categoryIds } = req.body;
    const post = await PostService.createPost(title, content, categoryIds, email);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createPost,
};