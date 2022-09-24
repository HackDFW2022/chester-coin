import express from 'express';

import { postSignin } from '../controllers/validateSignin.js';

const router = express.Router();

router.post('/', postSignin);

export default router;