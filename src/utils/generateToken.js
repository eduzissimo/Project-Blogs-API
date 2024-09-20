const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};