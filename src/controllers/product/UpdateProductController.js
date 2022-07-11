const asyncHandler = require("express-async-handler");
const UpdateProductUseCase = require("../../useCases/product/UpdateProductUseCase");

const UpdateProductController = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const dataUpdate = req.body;

  try {
    const updatedProduct = await UpdateProductUseCase(productId, dataUpdate);

    return res.status(200).json(updatedProduct).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message }).send();
  }
});

module.exports = UpdateProductController;
