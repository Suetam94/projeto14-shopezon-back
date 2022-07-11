const Cart = require("../../database/models/CartSchema");

async function AddProductToCartUseCase(cartData) {
  const { userId, productId, quantity } = cartData;

  const cart = new Cart(userId, productId, quantity);

  await cart.save();

  return cart;
}

module.exports = AddProductToCartUseCase;
