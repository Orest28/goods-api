import express from 'express';
import goodsRouter from './goods.routes.js';
import categoryRouter from './categories.routes.js';
import providerRouter from './providers.routes.js';
import measurementRouter from './measurements.routes.js';
import authRouter from './users.routes.js';

const rootRouter = express.Router();

rootRouter.use('/goods', goodsRouter);
rootRouter.use('/category', categoryRouter);
rootRouter.use('/provider', providerRouter);
rootRouter.use('/measurement', measurementRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;
