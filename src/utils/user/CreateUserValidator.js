const joi = require("joi");

const CreateUserValidator = async (userRequestData) => {
  const validatorSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(6).required(),
  });

  return validatorSchema.validateAsync(userRequestData);
};

module.exports = CreateUserValidator;
