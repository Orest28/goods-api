import express from 'express';

const rootRouter = express.Router();

const goods = require('./goods.routes.js');

rootRouter.use('/goods', goods);

export default rootRouter;