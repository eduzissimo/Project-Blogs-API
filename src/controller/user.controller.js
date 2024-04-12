const jwt = require('jsonwebtoken');
const UserService = require('../service/user.service');

const secret = process.env.JWT_SECRET;

const addUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const user = await UserService.verifyAndCreateUser(
    displayName,
    email,
    password,
  );

  if (user.error) {
    return res.status(user.error).json({ message: user.message });
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ displayName, email }, secret, jwtConfig);

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};