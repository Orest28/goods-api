import express from 'express';

import {find, findAll, create} from '../controllers/goodsController';

const router = express.Router();

router.get("/", find)

router.post("/create", findAll);

router.get("/:product", create);

export default router;