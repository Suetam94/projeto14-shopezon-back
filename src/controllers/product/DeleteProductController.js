const asyncHandler = require("express-async-handler");
const DeleteProductUseCase = require("../../useCases/product/DeleteProductUseCase")

const DeleteProductController = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  try {
    const deleteProduct = await DeleteProductUseCase(productId);

    return res.status(200).json(deleteProduct).send();
  } catch (e) {
    console.log(e);
    res.status(404).json({message: e.message}).send();
  }

});

module.exports = DeleteProductController;