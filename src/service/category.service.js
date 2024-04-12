const { Category } = require('../models');

const addCategory = async (name) => {
  if (!name) return { error: 400, message: '"name" is required' };

  const category = await Category.create({ name });

  return category;
};

const getCategory = async () => {
  const category = await Category.findAll();

  return category;
};

module.exports = {
  addCategory,
  getCategory,
};