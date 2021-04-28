import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';
import scholarships from './scholarship/scholarship';

const UserSchema: Schema = new Schema(
    {
        lastName: { type: String, required: true },
        firstName: { type: String, required: true },
        email: { type: String, required: true },
        dob: { type: Date, required: true },
        password: { type: String, required: true },
        address: { type: String, required: true },
        zipCode: { type: Number, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: Number },
        scholarships: [
            {
                status: { type: String },
                scholarship: { type: Schema.Types.ObjectId, ref: scholarships }
            }
        ],
        education: {
            geography: { type: String },
            maths: { type: String },
            PE: { type: String },
            english: { type: String },
            IT: { type: String },
            science: { type: String }
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('users', UserSchema);
