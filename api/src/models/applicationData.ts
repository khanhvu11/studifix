import mongoose, { Schema } from 'mongoose';
import city from './scholarship/components/city';
import country from './scholarship/components/country';
import familyStatus from './scholarship/components/familyStatus';
import gender from './scholarship/components/gender';
import salutation from './scholarship/components/salutation';

const ApplicationDataSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    dataSetType: { type: String },
    salutation: {
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
        values: [{ type: Schema.Types.ObjectId, ref: salutation }]
    },
    firstName: {
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
        }
    },
    lastName: {
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
        }
    },
    dateOfBirth: {
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
        }
    },
    placeOfBirth: {
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
        values: [{ type: Schema.Types.ObjectId, ref: city }]
    },
    countryOfBirth: {
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
        values: [{ type: Schema.Types.ObjectId, ref: country }]
    },
    gender: {
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
        values: [{ type: Schema.Types.ObjectId, ref: gender }]
    },
    famiyStatus: {
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
        values: [{ type: Schema.Types.ObjectId, ref: familyStatus }]
    },
    country: {
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
        values: [{ type: Schema.Types.ObjectId, ref: country }]
    },
    city: {
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
        values: [{ type: Schema.Types.ObjectId, ref: city }]
    },
    street: {
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
        }
    },
    number: {
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
        }
    },
    ZIP: {
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
        }
    },
    mail: {
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
        }
    },
    mobile: {
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
        }
    }
});

export default mongoose.model('applicationData', ApplicationDataSchema, 'applicationData');
