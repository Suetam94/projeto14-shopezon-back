const User = require("../../database/models/UserSchema");

const DeleteUserUseCase = (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = DeleteUserUseCase;
