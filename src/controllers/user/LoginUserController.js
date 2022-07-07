const asyncHandler = require("express-async-handler");
const LoginUserValidator = require("../../utils/user/LoginUserValidator");
const LoginUserUseCase = require("../../useCases/user/LoginUserUseCase");

const LoginUserController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const validateUserData = await LoginUserValidator({ email, password });

    const loggedUser = await LoginUserUseCase(validateUserData);

    return res.status(200).json(loggedUser).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message }).send();
  }
});

module.exports = LoginUserController;
