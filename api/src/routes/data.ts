import express from 'express';
import { resolveFilterData, resolveApplicationData } from '../controllers/business/scholarship';

const router = express.Router();

//data routes to proceed data sets | starts all with '/data'
router.get('/filter', resolveFilterData);
router.get('/application', resolveApplicationData);

export = router;
