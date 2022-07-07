const asyncHandler = require("express-async-handler");
const UpdateUserUseCase = require("../../useCases/user/UpdateUserUseCase");

const UpdateUserController = asyncHandler(async (req, res) => {
  const { user } = req;

  try {
    const updatedUser = await UpdateUserUseCase(user._id, req.body);

    return res.status(200).json(updatedUser).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message }).send();
  }
});

module.exports = UpdateUserController;
