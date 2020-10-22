import express from 'express';

import { findAll, create } from '../controllers/categoryController';

const router = express.Router();

router.get('/', findAll);

router.post('/create', create);

export default router;
