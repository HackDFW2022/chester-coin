import express from 'express';

import { postlogin } from '../controllers/login.js';

const router = express.Router();

router.post('/', postlogin);

export default router;