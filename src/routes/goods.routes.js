import express from 'express';

import {
  find, findAll, create, update, deleteProduct
} from '../controllers/goodsController.js';

// eslint-disable-next-line import/named
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', auth, findAll);

router.post('/create', auth, create);

router.get('/:product', auth, find);

router.put('/update', auth, update);

router.delete('/delete/:id', auth, deleteProduct);

export default router;
