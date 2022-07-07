const asyncHandler = require("express-async-handler");

const GetUserController = asyncHandler(async (req, res) => {
  const { user } = req;

  return res.status(200).json(user).send();
});

module.exports = GetUserController;
