import mongoose from '../db/db.connection.js';

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: {type: String}
})

export default mongoose.model("category", CategorySchema);