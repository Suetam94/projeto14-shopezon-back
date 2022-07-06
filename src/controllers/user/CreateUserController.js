const asyncHandler = require("express-async-handler");

const CreateUserController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Fields name, email and password must be provided");
  }

  //TODO CreateUserUseCase

  return res.status(201).json({ name, email, password }).send();
});

module.exports = CreateUserController;
