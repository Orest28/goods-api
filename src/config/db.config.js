import dotenv from 'dotenv';

dotenv.config();

const dbconfig = {
  url: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pdex4.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
};

export default dbconfig;
