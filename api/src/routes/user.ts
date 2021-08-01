import { addUser, getToken } from '../controllers/business/user';
import express from 'express';

const router = express.Router();

router.post('/login', getToken);
router.post('/register', addUser);

export = router;
