const asyncHandler = require("express-async-handler");
const DeleteProductUseCase = require("../../useCases/product/DeleteProductUseCase")

const DeleteProductController = asyncHandler(async (req, res) => {
  const { id } = req.body;
  
  try {
    const deleteProduct = await DeleteProductUseCase(id);

    return res.status(200).json(deleteProduct).send();
  } catch (e) {
    console.log(e);
    res.status(404).json({message: e.message}).send();
  }

  return res.status(200).json({ id }).send();
});

module.exports = DeleteProductController;