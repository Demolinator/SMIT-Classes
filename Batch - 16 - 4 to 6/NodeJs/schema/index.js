import Joi from "joi";

const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().integer().min(3).max(5).required(),
});

export { 
    productSchema
}