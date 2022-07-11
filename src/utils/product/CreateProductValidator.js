const joi = require("joi");

const CreateProductValidator = async (productRequestData) => {
  const validatorSchema = joi.object({
    name: joi.string().min(3).required(),
    price: joi.number().required(),
    description: joi.string().min(10).required(),
    imgUrl: joi.string().uri().required(),
  });

  return validatorSchema.validateAsync(productRequestData);
};

module.exports = CreateProductValidator;
