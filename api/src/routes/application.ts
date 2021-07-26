import { applyWithoutAccount } from 'controllers/business/scholarship';
import express from 'express';

const router = express.Router();

// all routes starts with '/application'
router.post('/', applyWithoutAccount);

export = router;
