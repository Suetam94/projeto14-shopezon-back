const joi = require("joi");

const AddProductToCartValidator = async (cartRequestData) => {
  const validatorSchema = joi.object({
    userId: joi.string().required(),
    productId: joi.string().required(),
    quantity: joi.number().required(),
  });

  return validatorSchema.validateAsync(cartRequestData);
};

module.exports = AddProductToCartValidator;
