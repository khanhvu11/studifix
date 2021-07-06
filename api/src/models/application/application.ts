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
import scholarship from '../scholarship/scholarship';
import user from '../user/user';
import provider from '../components/provider';

const ApplicationSchema: Schema = new Schema(
    {
        scholarship: { type: Schema.Types.ObjectId, ref: scholarship, required: true },

        user: { type: Schema.Types.ObjectId, ref: user, required: true },

        provider: { type: Schema.Types.ObjectId, ref: provider, required: true },

        filterData: {
            semester: { type: Number, required: true },

            workExperience: { type: Number, required: false },

            sidejobHours: { type: Number, required: false },

            collegeGrade: { type: Number, required: false },

            jobGrade: { type: Number, required: false },

            uniGrade: { type: Number, required: false },

            nationality: [{ type: Schema.Types.ObjectId, ref: nationality, required: true }],

            nationalityDetail: [{ type: Schema.Types.ObjectId, ref: nationalityDetail }],

            religion: [{ type: Schema.Types.ObjectId, ref: religion, required: true }],

            requirement: [{ type: Schema.Types.ObjectId, ref: requirement }],

            occupation: [{ type: Schema.Types.ObjectId, ref: occupation, required: true }],

            graduation: [{ type: Schema.Types.ObjectId, ref: graduation, required: true }],

            course: [{ type: Schema.Types.ObjectId, ref: course, required: true }],

            commitment: [{ type: Schema.Types.ObjectId, ref: commitment }],

            support: [{ type: Schema.Types.ObjectId, ref: support }],

            reference: [{ type: Schema.Types.ObjectId, ref: reference }],

            state: [{ type: Schema.Types.ObjectId, ref: state }],

            supportYet: { type: Boolean, required: true }
        }
    },
    { timestamps: {} }
);

export default mongoose.model('applications', ApplicationSchema, 'applications');
