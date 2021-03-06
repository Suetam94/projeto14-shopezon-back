const bcrypt = require("bcrypt");
const generateUserToken = require("../../utils/user/GenerateToken");
const User = require("../../database/models/UserSchema");

const CreateUserUseCase = async (userRequestData) => {
  const { name, email, password, isAdmin } = userRequestData;

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    isAdmin
  });

  await user.save();

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateUserToken(user._id),
    createdAt: user.createdAt,
  };
};

module.exports = CreateUserUseCase;
