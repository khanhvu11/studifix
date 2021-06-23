import mongoose, { Schema } from 'mongoose';
import occupation from './occupation';

const GraduationSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
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
    dependentOn: [{ type: Schema.Types.ObjectId, ref: occupation }]
});

export default mongoose.model('graduations', GraduationSchema);
