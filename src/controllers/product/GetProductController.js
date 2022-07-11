const asyncHandler = require("express-async-handler");
const GetProductUseCase = require("../../useCases/product/GetProductUseCase")

const GetProductController = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  try{
    const productFound = await GetProductUseCase(productId);

    return res.status(200).json(productFound).send();  
  }catch (e){
    console.log(e);
    res.status(404).json({message: e.message}).send();
  }
});

module.exports = GetProductController;