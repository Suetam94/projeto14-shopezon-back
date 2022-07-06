const User = require("../../database/models/UserSchema");

const UpdateUserUseCase = (userId, dataUpdate) => {
  return User.findByIdAndUpdate(userId, dataUpdate);
};

module.exports = UpdateUserUseCase;
