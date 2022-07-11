const Product = require("../../database/models/ProductSchema");

const UpdateProductUseCase = (productId, dataUpdate) => {
    return Product.findByIdAndUpdate(productId, dataUpdate, {new: true});
};

module.exports = UpdateProductUseCase;