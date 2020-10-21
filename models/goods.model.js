import mongoose from '../db/db.connection.js';

const Schema = mongoose.Schema;

let GoodsSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: "provider"
    }
})

export default mongoose.model("goods", GoodsSchema);