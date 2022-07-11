const Cart = require("../../database/models/CartSchema");

async function GetCartUseCase(userId) {
  return Cart.findById(userId);
}

module.exports = GetCartUseCase;
