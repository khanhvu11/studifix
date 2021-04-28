const Joi = require('joi');

const joiRegister = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(true),
    lastName: Joi.string().alphanum().min(3).max(30).required(true),
    dob: Joi.date().less('now').required(true),
    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net', 'de'] } })
        .required(true),
    scholarships: Joi.array(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(true),
    repeatPassword: Joi.ref('password'),
    address: Joi.string().min(5).max(60).required(true),
    zipCode: Joi.number().required(true),
    city: Joi.string().alphanum().min(5).max(30).required(true),
    country: Joi.string().alphanum().min(5).max(30).required(true),
    phone: Joi.number(),
    education: {
        maths: Joi.number().min(1).max(4).precision(1),
        geography: Joi.number().min(1).max(4).precision(1),
        PE: Joi.number().min(1).max(4).precision(1),
        english: Joi.number().min(1).max(4).precision(1),
        IT: Joi.number().min(1).max(4).precision(1),
        science: Joi.number().min(1).max(4).precision(1)
    }
});

const joiLogin = Joi.object({
    email: Joi.string().required(true),
    password: Joi.string().required(true)
});

const joiLangParams = Joi.object({
    lang: Joi.string().valid('DE', 'EN', 'FR')
});

export default { joiLogin, joiRegister, joiLangParams };
