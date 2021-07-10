const Joi = require('joi');

export const joiApplicationInput = Joi.object({
    scholarship: Joi.string().min(24).max(24).required(true),
    applicationData: {
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
    },
    filterData: {
        commitment: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        occupation: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        graduation: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        course: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        support: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        state: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        nationality: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        religion: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        requirement: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        reference: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        nationalityDetail: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        supportYet: Joi.boolean().required(true),
        workExperience: [Joi.number().min(0).max(50).required(true), null],
        sidejobHours: [Joi.number().min(0).max(40).required(true), null],
        collegeGrade: [Joi.number().min(1).max(6).required(true), null],
        jobGrade: [Joi.number().min(1).max(6).required(true), null],
        uniGrade: [Joi.number().min(1).max(6).required(true), null],
        semester: Joi.number().min(0).max(30).required(true),
        age: Joi.number().min(1).max(99).required(true)

        // country: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
        // city: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null],
    }
})
    .required()
    .min(1);
