import { getToken, register } from '../controllers/business/user';
import express from 'express';

const router = express.Router();

// user routes | starts all with '/user'
router.post('/login', getToken);
router.post('/register', register);

export = router;
