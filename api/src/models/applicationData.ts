import mongoose, { Schema } from 'mongoose';

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
        }
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
        }
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
        }
    },
    ender: {
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
        }
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
        }
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
        }
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
