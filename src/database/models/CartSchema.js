const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  productId: {
    type: Schema.types.ObjectId,
    ref: "Product",
    required: [true, "Product ID is required"],
  },
  userId: {
    type: Schema.types.ObjectId,
    ref: "User",
    required: [true, "UserId ID is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
});

module.exports = model("Cart", CartSchema);
