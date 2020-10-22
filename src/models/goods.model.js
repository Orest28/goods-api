import mongoose from '../db/db.connection';

const { Schema } = mongoose;

const GoodsSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'provider',
  },
  expirationDate: { type: Date },
  measurement: {
    type: Schema.Types.ObjectId,
    ref: 'measurement',
  },
  amount: { type: Number },
});

export default mongoose.model('goods', GoodsSchema);
