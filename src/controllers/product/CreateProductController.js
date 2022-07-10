const asyncHandler = require("express-async-handler");

const CreateProductController = asyncHandler(async (req, res) => {
  const { name, price, description, imgUrl } = req.body;

  if (!name || !price || !description || !imgUrl) {
    res.status(400);
    throw new Error("Fields name, price, description and imgUrl must be provided");
  }

  //TODO CreateProductUseCase

  return res.status(201).json({ name, price, description, imgUrl }).send();
});

module.exports = CreateProductController;