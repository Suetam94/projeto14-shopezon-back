const asyncHandler = require("express-async-handler");
const CreateUserValidator = require("../../utils/user/CreateUserValidator");
const CreateUserUseCase = require("../../useCases/user/CreateUserUseCase");

const CreateUserController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Fields name, email and password must be provided");
  }

  try {
    const validateUserData = await CreateUserValidator({
      name,
      email,
      password,
    });

    const user = await CreateUserUseCase(validateUserData);

    return res.status(201).json(user).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message }).send();
  }
});

module.exports = CreateUserController;
