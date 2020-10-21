import express from 'express';
import goodsRouter from './goods.routes.js';
import categoryRouter from './categories.routes.js';
import providerRouter from './providers.routes.js';

const rootRouter = express.Router();

rootRouter.use('/goods', goodsRouter);
rootRouter.use('/category', categoryRouter);
rootRouter.use('/provider', providerRouter);

export default rootRouter;