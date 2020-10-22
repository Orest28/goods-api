import mongoose from '../db/db.connection';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String },
});

export default mongoose.model('category', CategorySchema);
