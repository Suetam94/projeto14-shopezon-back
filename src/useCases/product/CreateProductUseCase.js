const Product = require("../../database/models/ProductSchema");

const CreateProductUseCase = async (productRequestData) => {
  const { name, price, description, imgUrl, stock } = productRequestData;

  const product = new Product({
    name,
    price,
    description,
    imgUrl,
    stock,
  });

  await product.save();

  return {
    _id: product._id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    description: product.description,
    imgUrl: product.imgUrl,
    createdAt: product.createdAt,
  };
};

module.exports = CreateProductUseCase;
