import express from 'express';

import { findAll, create } from '../controllers/measurementController.js';

const router = express.Router();

router.get('/', findAll);

router.post('/create', create);

export default router;
