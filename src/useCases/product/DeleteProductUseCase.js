const Product = require("../../database/models/ProductSchema");

const DeleteProductUseCase = (productId) => {
    return Product.findByIdAndDelete(productId)
};

module.exports = DeleteProductUseCase;