import mongoose, { Schema } from 'mongoose';
import city from './components/city';
import commitment from './components/commitment';
import country from './components/country';
import course from './components/course';
import employee from './components/employee';
import graduation from './components/graduation';
import institution from './components/institution';
import nationality from './components/nationality';
import nationalityDetail from './components/nationalityDetail';
import occupation from './components/occupation';
import provider from './components/provider';
import referenceDetail from './components/reference';
import religion from './components/religion';
import requirement from './components/requirements';
import state from './components/state';
import support from './components/support';
import supportSpecific from './components/supportSpecific';

const ScholarshipSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    responsible: { type: Schema.Types.ObjectId, ref: employee },
    provider: { type: Schema.Types.ObjectId, ref: provider },
    link: { type: String, required: true },
    occupation: [{ type: Schema.Types.ObjectId, ref: occupation }],
    semester: { type: Number, required: true },
    graduation: [{ type: Schema.Types.ObjectId, ref: graduation }],
    course: [{ type: Schema.Types.ObjectId, ref: course }],
    country: [{ type: Schema.Types.ObjectId, ref: country }],
    city: [{ type: Schema.Types.ObjectId, ref: city }],
    state: [{ type: Schema.Types.ObjectId, ref: state }],
    institution: [{ type: Schema.Types.ObjectId, ref: institution }],
    support: [{ type: Schema.Types.ObjectId, ref: support }],
    supportSpecific: [{ type: Schema.Types.ObjectId, ref: supportSpecific }],
    referenceRequiered: { type: Boolean, required: true },
    referenceAllowed: { type: Boolean, required: true },
    referenceDetail: [{ type: Schema.Types.ObjectId, ref: referenceDetail }],
    ageRestriction: { type: Number, required: true },
    nationality: [{ type: Schema.Types.ObjectId, ref: nationality }],
    nationalityDetail: [{ type: Schema.Types.ObjectId, ref: nationalityDetail }],
    requirement: [{ type: Schema.Types.ObjectId, ref: requirement }],
    religion: [{ type: Schema.Types.ObjectId, ref: religion }],
    collegeGraduation: { type: Number, required: true },
    collegeGraduationState: [{ type: Schema.Types.ObjectId, ref: state }],
    jobTrainingGraduation: { type: Number, required: true },
    uniGraduation: { type: Number, required: true },
    specialJobExperience: { type: Number, required: true },
    sideJobAllowed: { type: Boolean, required: true },
    currentJobHours: { type: Number, required: true },
    commitment: [{ type: Schema.Types.ObjectId, ref: commitment }]
});

export default mongoose.model('scholarships', ScholarshipSchema);
