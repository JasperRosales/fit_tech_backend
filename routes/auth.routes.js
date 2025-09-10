import { Router } from 'express';
import { test } from '../controllers/auth.controller.js';

const router = Router();

// router.post('/register', register);
// router.post('/login', login);
router.get('/test', test);

export default router;
