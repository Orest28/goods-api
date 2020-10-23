import mongoose from '../db/db.connection.js';

const { Schema } = mongoose;

const MeasurementSchema = new Schema({
  type: { type: String },
});

export default mongoose.model('measurement', MeasurementSchema);
