import express from 'express';
import { resolveFilterData, resolveApplicationData } from '../controllers/business/scholarship';

const router = express.Router();

router.get('/filter', resolveFilterData);
router.get('/application', resolveApplicationData);

export = router;
