const { User } = require('../models');

const verifyAndCreateUser = async (displayName, email, password) => {
  const user = await User.findOne({ where: { email } });

  if (user) return { error: 409, message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password });

  return newUser;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  verifyAndCreateUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
};