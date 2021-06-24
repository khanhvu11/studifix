import express from 'express';
import { resolveFilterData, resolveApplicationData, filterScholarships, applyWithoutAccount, getScholarshipDetails } from '../controllers/business/scholarship';

const router = express.Router();

router.get('/filterdata', resolveFilterData);
router.get('/applicationdata', resolveApplicationData);
router.get('/scholarship/:_id', getScholarshipDetails);
router.post('/filter/scholarships', filterScholarships);
router.post('/application', applyWithoutAccount);

export = router;
