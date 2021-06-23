import mongoose, { Schema } from 'mongoose';
import city from '../components/city';
import country from '../components/country';
import familyStatus from '../components/familyStatus';
import gender from '../components/gender';
import salutation from '../components/salutation';
import scholarship from '../scholarship/scholarship';

const ApplicationSchema: Schema = new Schema(
    {
        scholarship: { type: Schema.Types.ObjectId, ref: scholarship },

        salutation: { type: Schema.Types.ObjectId, ref: salutation },

        firstName: { type: String, required: true },

        lastName: { type: String, required: true },

        dateOfBirth: { type: Date, required: true },

        placeOfBirth: { type: Schema.Types.ObjectId, ref: city },

        countryOfBirth: { type: Schema.Types.ObjectId, ref: country },

        gender: { type: Schema.Types.ObjectId, ref: gender },

        familyStatus: { type: Schema.Types.ObjectId, ref: familyStatus },

        country: { type: Schema.Types.ObjectId, ref: country },

        city: { type: Schema.Types.ObjectId, ref: city },

        street: { type: String, required: true },

        number: { type: String, required: true },

        ZIP: { type: Number, required: true },

        email: { type: String, required: true },

        mobile: { type: String, required: true }
    },
    { timestamps: {} }
);

export default mongoose.model('applications', ApplicationSchema, 'applications');
