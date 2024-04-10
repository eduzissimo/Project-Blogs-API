const { User } = require('../models');

const authentication = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  return user && user.password === password;
};

module.exports = {
  authentication,
};