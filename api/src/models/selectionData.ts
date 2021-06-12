import mongoose, { Schema } from 'mongoose';
import city from './scholarship/components/city';
import commitment from './scholarship/components/commitment';
import country from './scholarship/components/country';
import course from './scholarship/components/course';
import graduation from './scholarship/components/graduation';
import nationality from './scholarship/components/nationality';
import nationalityDetail from './scholarship/components/nationalityDetail';
import occupation from './scholarship/components/occupation';
import religion from './scholarship/components/religion';
import requirement from './scholarship/components/requirements';
import state from './scholarship/components/state';
import support from './scholarship/components/support';

const SelectionDataSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    dataSetType: { type: String },
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
        mandatory: { type: Boolean },
        multiselect: { type: Boolean },
        dependence: { type: String, required: true }
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
        mandatory: { type: Boolean },
        multiselect: { type: Boolean }
    }
});

export default mongoose.model('selection', SelectionDataSchema, 'selection');
