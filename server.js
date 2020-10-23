import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './src/routes/index.js';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Initialize project' });
});

// Routes

app.use('/', rootRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
