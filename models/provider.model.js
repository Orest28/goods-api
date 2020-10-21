import mongoose from '../db/db.connection.js';

const Schema = mongoose.Schema;

let ProviderSchema = new Schema({
    company: {type: String},
    address: {type: String}
})

export default mongoose.model("provider", ProviderSchema);