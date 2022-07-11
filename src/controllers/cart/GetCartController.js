const asyncHandler = require("express-async-handler");
const GetCartUseCase = require("../../useCases/cart/GetCartUseCase");
const GetCartController = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    res.status(404);
    throw new Error("User ID is required");
  }

  try {
    const cart = await GetCartUseCase(userId);

    return res.status(201).json(cart).send();
  } catch (e) {
    console.error(e);
    return res.status(404).json({ message: e.message }).send();
  }
});

module.exports = GetCartController;
