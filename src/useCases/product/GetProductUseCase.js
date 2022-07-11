const Product = require("../../database/models/ProductSchema");

const GetProductUseCase = (productId) => {
    return Product.findById(productId);
}

module.exports = GetProductUseCase;