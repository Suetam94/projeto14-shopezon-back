const Cart = require("../../database/models/CartSchema");

async function DeleteCartUseCase(userId) {
  return Cart.findOneAndDelete({ userId });
}
module.exports = DeleteCartUseCase;
