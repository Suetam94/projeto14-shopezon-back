const bcrypt = require("bcrypt");
const User = require("../../database/models/UserSchema");
const generateUserToken = require("../../utils/user/GenerateToken");

const LoginUserUseCase = async (userRequestData) => {
  const { email, password } = userRequestData;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User with this email not founded");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Credentials are not valid");
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateUserToken(user._id, user.isAdmin),
  };
};

module.exports = LoginUserUseCase;
