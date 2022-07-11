const Cart = require("../../database/models/CartSchema");

async function GetCartUseCase(userId) {
  return Cart.findOne({ userId });
}

module.exports = GetCartUseCase;
