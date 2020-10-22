import express from 'express';

import { find, findAll, create } from '../controllers/goodsController';

const router = express.Router();

router.get('/', findAll);

router.post('/create', create);

router.get('/:product', find);

export default router;
