const Joi = require('joi');

export const joiScholarshipID = Joi.object({
    _id: Joi.string().min(24).max(24)
});
