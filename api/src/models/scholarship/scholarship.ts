import mongoose, { Schema } from 'mongoose';
import city from '../components/city';
import commitment from '../components/commitment';
import country from '../components/country';
import course from '../components/course';
import employee from '../components/employee';
import graduation from '../components/graduation';
import institution from '../components/institution';
import localization from '../components/localization';
import nationality from '../components/nationality';
import nationalityDetail from '../components/nationalityDetail';
import occupation from '../components/occupation';
import provider from '../components/provider';
import referenceDetail from '../components/reference';
import religion from '../components/religion';
import requirement from '../components/requirement';
import state from '../components/state';
import support from '../components/support';

const ScholarshipSchema: Schema = new Schema(
    {
        responsible: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Schema.Types.ObjectId, ref: employee, required: true }
        },

        name: { type: String, required: true },

        provider: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Schema.Types.ObjectId, ref: provider, required: true }
        },

        link: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: String, required: true }
        },

        occupation: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: occupation }]
        },

        semesterMin: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        semesterMax: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        graduation: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: graduation }]
        },

        course: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: course }]
        },
        country: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: country }]
        },

        city: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: city }]
        },

        state: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: state }]
        },

        institution: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: institution }]
        },

        support: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: support }]
        },

        supportYet: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Boolean, required: true }
        },

        referenceRequiered: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Boolean, required: true }
        },

        referenceAllowed: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Boolean, required: true }
        },

        referenceDetail: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: referenceDetail }]
        },

        ageMin: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        ageMax: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        nationality: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: nationality }]
        },

        nationalityDetail: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: nationalityDetail }]
        },

        requirement: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: requirement }]
        },

        religion: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: religion }]
        },

        collegeGraduation: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        collegeGraduationState: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: state }]
        },

        jobTrainingGraduation: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        uniGraduation: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        specialJobExperience: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        sideJobAllowed: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Boolean, required: true }
        },

        currentJobHours: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: Number, required: false }
        },

        imgURL: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: { type: String, required: true }
        },

        commitment: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: [{ type: Schema.Types.ObjectId, ref: commitment }]
        },

        advancement: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: {
                title: {
                    DE: { type: String, required: true },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                },
                description: {
                    DE: { type: String, required: false },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                }
            }
        },

        advancementDetail: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: {
                title: {
                    DE: { type: String, required: true },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                },
                description: {
                    DE: { type: String, required: false },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                }
            }
        },

        advancementTime: {
            localization: { type: Schema.Types.ObjectId, ref: localization },
            value: {
                title: {
                    DE: { type: String, required: true },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                },
                description: {
                    DE: { type: String, required: false },
                    EN: { type: String, required: false },
                    FR: { type: String, required: false }
                }
            }
        }
    },
    { timestamps: {} }
);

export default mongoose.model('scholarships', ScholarshipSchema);
