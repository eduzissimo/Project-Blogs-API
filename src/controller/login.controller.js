const jwt = require('jsonwebtoken');
const LoginService = require('../service/login.service');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const auth = await LoginService.authentication(email, password);

    if (!isBodyValid(email, password) || !auth) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: req.body }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = {
  login,
};