// const jwt = require('jsonwebtoken');
const CategoryService = require('../service/category.service');

// const secret = process.env.JWT_SECRET;

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await CategoryService.addCategory(name);

  if (category.error) {
    return res.status(category.error).json({ message: category.message });
  }

  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };

  // const token = jwt.sign({ name }, secret, jwtConfig);

  res.status(201).json(category);
};

const getCategory = async (_req, res) => {
  const category = await CategoryService.getCategory();

  res.status(200).json(category);
};

module.exports = {
  addCategory,
  getCategory,
};
