import mongoose, { Schema } from 'mongoose';
import city from '../components/city';
import commitment from '../components/commitment';
import country from '../components/country';
import course from '../components/course';
import graduation from '../components/graduation';
import nationality from '../components/nationality';
import nationalityDetail from '../components/nationalityDetail';
import occupation from '../components/occupation';
import reference from '../components/reference';
import religion from '../components/religion';
import requirement from '../components/requirements';
import state from '../components/state';
import support from '../components/support';

const FilterDataSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    dataSetType: { type: String },
    age: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    nationality: {
        values: [{ type: Schema.Types.ObjectId, ref: nationality }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    nationalityDetail: {
        values: [{ type: Schema.Types.ObjectId, ref: nationalityDetail }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    religion: {
        values: [{ type: Schema.Types.ObjectId, ref: religion }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    requirement: {
        values: [{ type: Schema.Types.ObjectId, ref: requirement }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    occupation: {
        values: [{ type: Schema.Types.ObjectId, ref: occupation }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    graduation: {
        values: [{ type: Schema.Types.ObjectId, ref: graduation }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean },
        dependence: { type: String, required: true }
    },
    course: {
        values: [{ type: Schema.Types.ObjectId, ref: course }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean },
        dependence: { type: String, required: true }
    },
    semester: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    collegeGrade: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    jobGrade: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    uniGrade: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    workExperience: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    sidejobHours: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    commitment: {
        values: [{ type: Schema.Types.ObjectId, ref: commitment }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    support: {
        values: [{ type: Schema.Types.ObjectId, ref: support }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    supportYet: {
        values: { type: String, required: true },
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    reference: {
        values: [{ type: Schema.Types.ObjectId, ref: reference }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },

    country: {
        values: [{ type: Schema.Types.ObjectId, ref: country }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    state: {
        values: [{ type: Schema.Types.ObjectId, ref: state }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    },
    city: {
        values: [{ type: Schema.Types.ObjectId, ref: city }],
        title: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        description: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        descriptionDetail: {
            DE: { type: String, required: true },
            EN: { type: String, required: true },
            FR: { type: String, required: true }
        },
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    }
});

export default mongoose.model('filterData', FilterDataSchema, 'filterData');
