const Product = require("../../database/models/ProductSchema");

const GetAllProductsUseCase = () => {
  return Product.find({});
};

module.exports = GetAllProductsUseCase;
