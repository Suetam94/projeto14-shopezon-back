const asyncHandler = require("express-async-handler");
const DeleteUserUseCase = require("../../useCases/user/DeleteUserUseCase");

const DeleteUserController = asyncHandler(async (req, res) => {
  const { user } = req;

  try {
    const deletedUser = await DeleteUserUseCase(user._id);

    return res.status(200).json(deletedUser).send();
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: e.message }).send();
  }
});

module.exports = DeleteUserController;
