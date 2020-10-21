import mongoose from '../db/db.connection.js';

const Schema = mongoose.Schema;

let GoodsSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
})

export default mongoose.model("goods", GoodsSchema);