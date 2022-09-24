import express from 'express';

import { postredeem } from '../controllers/redeem.js';

const router = express.Router();

router.post('/', postredeem);

export default router;