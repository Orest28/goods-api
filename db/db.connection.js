import dbconfig from '../config/db.config.js';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected");
})

export default mongoose;

