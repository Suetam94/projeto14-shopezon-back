const Cart = require("../../database/models/CartSchema");

async function UpdateCartUseCase(userId, cartData) {
  return Cart.findOneAndUpdate({ userId }, cartData, { new: true });
}

module.exports = UpdateCartUseCase;
