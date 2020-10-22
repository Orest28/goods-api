import mongoose from '../db/db.connection';

const { Schema } = mongoose;

const ProviderSchema = new Schema({
  company: { type: String },
  address: { type: String },
});

export default mongoose.model('provider', ProviderSchema);
