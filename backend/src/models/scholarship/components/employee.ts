import mongoose, { Schema } from 'mongoose';

const EmployeeSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    position: { type: String, required: true }
});

export default mongoose.model('employees', EmployeeSchema);
