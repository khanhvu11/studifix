import express from 'express';

import controller from '../controllers/business/user';
import validate from '../middlewares/validation';

const router = express.Router();

router.post('/login', controller.getToken);
router.post('/register', controller.addUser);

export = router;
