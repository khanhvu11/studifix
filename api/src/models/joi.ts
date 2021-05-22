const Joi = require('joi');

export const joiRegister = Joi.object({
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

export const joiLogin = Joi.object({
    email: Joi.string().required(true),
    password: Joi.string().required(true)
});

export const joiFilterParams = Joi.object({
    selectionData: {
        //todo: check for hexadecimal numbers 12 or 24
        commitment: [Joi.array().items(Joi.string().min(24).max(24)), null],
        occupation: [Joi.array().items(Joi.string().min(24).max(24)), null],
        graduation: [Joi.array().items(Joi.string().min(24).max(24)), null],
        course: [Joi.array().items(Joi.string().min(24).max(24)), null],
        support: [Joi.array().items(Joi.string().min(24).max(24)), null],
        state: [Joi.array().items(Joi.string().min(24).max(24)), null],
        nationality: [Joi.array().items(Joi.string().min(24).max(24)), null],
        religion: [Joi.array().items(Joi.string().min(24).max(24)), null],
        requirement: [Joi.array().items(Joi.string().min(24).max(24)), null],
        nationalityDetail: [Joi.array().items(Joi.string().min(24).max(24)), null],
        supportSpecific: [Joi.array().items(Joi.string().min(24).max(24)), null],

        semester: [Joi.number().min(1).max(20), null],
        age: [Joi.number().min(1).max(99), null]
    }
});

export const joiScholarshipID = Joi.object({
    _id: Joi.string().min(24).max(24)
});
