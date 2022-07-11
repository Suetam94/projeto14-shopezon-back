const joi = require("joi");

const LoginUserValidator = async (userRequestData) => {
  const validatorSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(6).required(),
  });

  return validatorSchema.validateAsync(userRequestData);
};

module.exports = LoginUserValidator;
