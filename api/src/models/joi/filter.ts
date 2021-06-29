const Joi = require('joi');

export const joiFilterParams = Joi.object({
    filterData: {
        //todo: check for hexadecimal numbers 12 or 24
        commitment: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        occupation: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        graduation: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        course: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        support: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        state: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        nationality: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        religion: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        requirement: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        reference: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        nationalityDetail: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        supportYet: Joi.boolean().required(true),
        workExperience: [Joi.number().min(0).max(50).required(true), null],
        sidejobHours: [Joi.number().min(0).max(40).required(true), null],
        collegeGrade: [Joi.number().min(1).max(6).required(true), null],
        jobGrade: [Joi.number().min(1).max(6).required(true), null],
        uniGrade: [Joi.number().min(1).max(6).required(true), null],
        semester: Joi.number().min(1).max(30).required(true),
        age: Joi.number().min(1).max(99).required(true)

        // country: Joi.array().items(Joi.string().min(24).max(24)).required(true),
        // city: Joi.array().items(Joi.string().min(24).max(24)).required(true),
    }
});
