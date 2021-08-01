import express from 'express';
import { resolveFilterData, resolveApplicationData } from '../controllers/business/scholarship';

const router = express.Router();

router.get('/filterdata', resolveFilterData);
router.get('/applicationdata', resolveApplicationData);

export = router;
