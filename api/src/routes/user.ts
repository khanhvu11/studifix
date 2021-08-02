import { getToken, register } from '../controllers/business/user';
import express from 'express';

const router = express.Router();

router.post('/login', getToken);
router.post('/register', register);

export = router;
