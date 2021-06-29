import city from '../components/city';
import country from '../components/country';
import familyStatus from '../components/familyStatus';
import gender from '../components/gender';
import mongoose, { Schema } from 'mongoose';
import IUser from '../../interfaces/user';

const UserSchema: Schema = new Schema(
    {
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

        mobile: { type: String, required: true }
    },
    { timestamps: {} }
);

export default mongoose.model<IUser>('users', UserSchema);
