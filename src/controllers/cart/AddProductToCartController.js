const asyncHandler = require("express-async-handler");
const AddProductToCartUseCase = require("../../useCases/cart/AddProductToCartUseCase");
const AddProductToCartValidator = require("../../utils/cart/AddProductToCartValidator");
const AddProductToCartController = asyncHandler(async (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !quantity || productId) {
    res.status(404);
    throw new Error("User ID, product id and quantity are required");
  }

  try {
    const validatedCart = await AddProductToCartValidator({
      userId,
      productId,
      quantity,
    });

    const cart = await AddProductToCartUseCase(validatedCart);

    return res.status(201).json(cart).send();
  } catch (e) {
    console.error(e);
    return res.status(404).json({ message: e.message }).send();
  }
});

module.exports = AddProductToCartController;
