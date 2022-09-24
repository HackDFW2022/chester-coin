import express from 'express';

import { posttrade } from '../controllers/trade.js';

const router = express.Router();

router.post('/', posttrade);

export default router;