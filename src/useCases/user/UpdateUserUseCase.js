const User = require("../../database/models/UserSchema");

const UpdateUserUseCase = (userId, dataUpdate) => {
  return User.findByIdAndUpdate(userId, dataUpdate, { new: true }).select(
    "-password"
  );
};

module.exports = UpdateUserUseCase;
