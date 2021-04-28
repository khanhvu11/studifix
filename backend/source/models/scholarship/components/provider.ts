import mongoose, { Schema } from 'mongoose';

const ProviderSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    mail: { type: String, required: true }
});

export default mongoose.model('Provider', ProviderSchema, 'providers');
