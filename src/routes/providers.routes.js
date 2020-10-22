import express from 'express';

import { findAll, create } from '../controllers/providerController';

const router = express.Router();

router.get('/', findAll);

router.post('/create', create);

export default router;
