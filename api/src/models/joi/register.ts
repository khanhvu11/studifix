const Joi = require('joi');

export const joiRegister = Joi.object({
    firstName: Joi.string().min(3).max(30).required(true),
    lastName: Joi.string().min(3).max(30).required(true),
    gender: Joi.string().min(24).max(24).required(true),
    dateOfBirth: Joi.date().less('now').required(true),
    placeOfBirth: Joi.string().min(24).max(24).required(true),
    countryOfBirth: Joi.string().min(24).max(24).required(true),
    country: Joi.string().min(24).max(24).required(true),
    city: Joi.string().min(24).max(24).required(true),
    street: Joi.string().max(40).required(true),
    number: Joi.number().min(1).max(999).required(true),
    ZIP: Joi.number().min(10000).max(99999).required(true),
    mobile: Joi.string().min(12).max(15).regex(/^\d+$/),
    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net', 'de'] } })
        .required(true),
    familyStatus: Joi.string().min(24).max(24).required(true)
})
    .required()
    .min(1);
