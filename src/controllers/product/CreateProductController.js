const asyncHandler = require("express-async-handler");
const CreateProductValidator = require("../../utils/product/CreateProductValidator")
const CreateProductUseCase = require("../../useCases/product/CreateProductUseCase");

const CreateProductController = asyncHandler(async (req, res) => {
  const { name, price, description, imgUrl } = req.body;

  if (!name || !price || !description || !imgUrl) {
    res.status(400);
    throw new Error("Fields name, price, description and imgUrl must be provided");
  }

  try {
    const validateProductData = await CreateProductValidator({
      name,
      price,
      description,
      imgUrl,
    });

    const product = await CreateProductUseCase(validateProductData);

    return res.status(201).json(product).send();
  } catch (e) {
    console.log(e);
    return res.status(400).json({message: e.message}).send();
  }
});

module.exports = CreateProductController;