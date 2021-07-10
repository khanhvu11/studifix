const Joi = require('joi');

export const joiScholarship = Joi.object({
    //todo: check for hexadecimal numbers 12 or 24
    link: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.string().min(1).required(true)
    },
    imgURL: {
        value: Joi.string().min(1).required(true)
    },
    name: Joi.string().min(1).max(50).required(true),

    semesterMax: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    semesterMin: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    ageMin: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    ageMax: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    collegeGraduation: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    jobTrainingGraduation: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    uniGraduation: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    currentJobHours: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    specialJobExperience: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.number().min(1).max(50).required(true), null]
    },
    referenceRequiered: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.boolean().required(true)
    },
    referenceAllowed: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.boolean().required(true)
    },
    sideJobAllowed: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.boolean().required(true)
    },

    collegeGraduationState: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    institution: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    provider: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.string().min(24).max(24).required(true)
    },
    referenceDetail: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    advancement: {
        localization: Joi.string().min(24).max(24).required(true),
        value: {
            title: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            },
            description: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            }
        }
    },
    advancementDetail: {
        localization: Joi.string().min(24).max(24).required(true),
        value: {
            title: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            },
            description: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            }
        }
    },
    advancementTime: {
        localization: Joi.string().min(24).max(24).required(true),
        value: {
            title: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            },
            description: {
                DE: [Joi.string().min(5).required(true), null],
                EN: [Joi.string().min(5).required(true), null],
                FR: [Joi.string().min(5).required(true), null]
            }
        }
    },
    commitment: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    responsible: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.string().min(24).max(24).required(true)
    },
    occupation: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    graduation: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    course: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    support: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    state: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    nationality: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    religion: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    requirement: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    nationalityDetail: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    supportYet: {
        localization: Joi.string().min(24).max(24).required(true),
        value: Joi.boolean().required(true)
    },
    country: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    },
    city: {
        localization: Joi.string().min(24).max(24).required(true),
        value: [Joi.array().items(Joi.string().min(24).max(24)).required(true), null]
    }
})
    .required()
    .min(1);
