const Joi = require('joi');

export const joiFilterParams = Joi.object({
    filterData: {
        //todo: check for hexadecimal numbers 12 or 24
        commitment: [Joi.array().items(Joi.string().min(24).max(24)), null],
        occupation: [Joi.array().items(Joi.string().min(24).max(24)), null],
        graduation: [Joi.array().items(Joi.string().min(24).max(24)), null],
        course: [Joi.array().items(Joi.string().min(24).max(24)), null],
        support: [Joi.array().items(Joi.string().min(24).max(24)), null],
        state: [Joi.array().items(Joi.string().min(24).max(24)), null],
        // country: [Joi.array().items(Joi.string().min(24).max(24)), null],
        // city: [Joi.array().items(Joi.string().min(24).max(24)), null],
        nationality: [Joi.array().items(Joi.string().min(24).max(24)), null],
        religion: [Joi.array().items(Joi.string().min(24).max(24)), null],
        requirement: [Joi.array().items(Joi.string().min(24).max(24)), null],
        reference: [Joi.array().items(Joi.string().min(24).max(24)), null],
        nationalityDetail: [Joi.array().items(Joi.string().min(24).max(24)), null],
        supportYet: Joi.boolean(),
        workExperience: [Joi.number().min(1).max(50), null],
        sidejobHours: [Joi.number().min(1).max(40), null],
        collegeGrade: [Joi.number().min(1).max(5), null],
        jobGrade: [Joi.number().min(1).max(5), null],
        uniGrade: [Joi.number().min(1).max(5), null],
        semester: [Joi.number().min(0).max(30), null],
        age: [Joi.number().min(1).max(99), null]
    }
});
