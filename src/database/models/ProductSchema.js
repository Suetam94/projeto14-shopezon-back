const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Product name is required"],
    },
    price: {
      type: Number,
      require: [true, "Product price is required"],
    },
    stock: {
      type: Number,
      require: [true, "Product price is required"],
    },
    description: {
      type: String,
      require: [true, "Product description is required"],
    },
    imgUrl: {
      type: String,
      require: [true, "Product imgUrl is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", ProductSchema);
