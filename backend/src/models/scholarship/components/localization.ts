import mongoose, { Schema } from 'mongoose';

const LocalizationSchema: Schema = new Schema({
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
    }
});

export default mongoose.model('localizations', LocalizationSchema, 'localizations');
