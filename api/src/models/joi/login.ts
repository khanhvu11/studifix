const Joi = require('joi');

export const joiLogin = Joi.object({
    email: Joi.string().required(true),
    password: Joi.string().required(true)
});
