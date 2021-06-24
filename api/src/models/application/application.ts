import commitment from '../components/commitment';
import course from '../components/course';
import graduation from '../components/graduation';
import nationality from '../components/nationality';
import nationalityDetail from '../components/nationalityDetail';
import occupation from '../components/occupation';
import reference from '../components/reference';
import religion from '../components/religion';
import requirement from '../components/requirement';
import state from '../components/state';
import support from '../components/support';
import mongoose, { Schema } from 'mongoose';
import city from '../components/city';
import country from '../components/country';
import familyStatus from '../components/familyStatus';
import gender from '../components/gender';
import salutation from '../components/salutation';
import scholarship from '../scholarship/scholarship';

const ApplicationSchema: Schema = new Schema(
    {
        scholarship: { type: Schema.Types.ObjectId, ref: scholarship, required: true },

        salutation: { type: Schema.Types.ObjectId, ref: salutation, required: true },

        firstName: { type: String, required: true },

        lastName: { type: String, required: true },

        dateOfBirth: { type: Date, required: true },

        placeOfBirth: { type: Schema.Types.ObjectId, ref: city, required: true },

        countryOfBirth: { type: Schema.Types.ObjectId, ref: country, required: true },

        gender: { type: Schema.Types.ObjectId, ref: gender, required: true },

        familyStatus: { type: Schema.Types.ObjectId, ref: familyStatus, required: true },

        country: { type: Schema.Types.ObjectId, ref: country, required: true },

        city: { type: Schema.Types.ObjectId, ref: city, required: true },

        street: { type: String, required: true },

        number: { type: String, required: true },

        ZIP: { type: Number, required: true },

        email: { type: String, required: true },

        mobile: { type: String, required: true },

        age: { type: Number, required: true },

        semester: { type: Number, required: true },

        workExperience: { type: Number, required: true },

        sidejobHours: { type: Number, required: true },

        collegeGrade: { type: Number, required: false },

        jobGrade: { type: Number, required: false },

        uniGrade: { type: Number, required: false },

        nationality: [{ type: Schema.Types.ObjectId, ref: nationality, required: true }],

        nationalityDetail: [{ type: Schema.Types.ObjectId, ref: nationalityDetail, required: true }],

        religion: [{ type: Schema.Types.ObjectId, ref: religion, required: true }],

        requirement: [{ type: Schema.Types.ObjectId, ref: requirement, required: true }],

        occupation: [{ type: Schema.Types.ObjectId, ref: occupation, required: true }],

        graduation: [{ type: Schema.Types.ObjectId, ref: graduation, required: true }],

        course: [{ type: Schema.Types.ObjectId, ref: course, required: true }],

        commitment: [{ type: Schema.Types.ObjectId, ref: commitment, required: true }],

        support: [{ type: Schema.Types.ObjectId, ref: support, required: true }],

        reference: [{ type: Schema.Types.ObjectId, ref: reference, required: true }],

        state: [{ type: Schema.Types.ObjectId, ref: state, required: true }],

        supportYet: { type: Boolean, required: true }
    },
    { timestamps: {} }
);

export default mongoose.model('applications', ApplicationSchema, 'applications');
