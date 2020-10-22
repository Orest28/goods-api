import express from 'express';
import goodsRouter from './goods.routes';
import categoryRouter from './categories.routes';
import providerRouter from './providers.routes';
import measurementRouter from './measurements.routes';
import authRouter from './users.routes';

const rootRouter = express.Router();

rootRouter.use('/goods', goodsRouter);
rootRouter.use('/category', categoryRouter);
rootRouter.use('/provider', providerRouter);
rootRouter.use('/measurement', measurementRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;
