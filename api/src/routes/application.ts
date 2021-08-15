import { applyWithoutAccount } from '../controllers/business/scholarship';
import express from 'express';

const router = express.Router();

//application routes | starts all with '/application'
router.post('/', applyWithoutAccount);

export = router;
