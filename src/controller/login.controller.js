const jwt = require('jsonwebtoken');
const LoginService = require('../service/login.service');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;
  const authentication = await LoginService.auth(email, password);

  if (!authentication) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ email }, secret, { expiresIn: '2d' });

  res.status(200).json({ token });
};

module.exports = {
  login,
};