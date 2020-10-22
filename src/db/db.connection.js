import mongoose from 'mongoose';
import dbconfig from '../config/db.config';

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Connected');
});

export default mongoose;
