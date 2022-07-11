const asyncHandler = require("express-async-handler");
const GetAllProductsUseCase = require("../../useCases/product/GetAllProductsUseCase");

const GetAllProductsController = asyncHandler(async (req, res) => {
  try {
    const allProducts = await GetAllProductsUseCase();

    return res.status(200).json(allProducts).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message }).send();
  }
});

module.exports = GetAllProductsController;
