import { applyWithoutAccount } from '../controllers/business/scholarship';
import express from 'express';

const router = express.Router();

router.post('/', applyWithoutAccount);

export = router;
