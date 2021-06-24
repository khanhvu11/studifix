import express from 'express';
import { resolveFilterData, resolveApplicationData, filterScholarships, getSingleScholarshipByID, createNewApplication } from '../controllers/business/scholarship';

const router = express.Router();

router.get('/filterdata', resolveFilterData);
router.get('/applicationdata', resolveApplicationData);
router.get('/filter/scholarships/:_id', getSingleScholarshipByID);
router.post('/filter/scholarships', filterScholarships);
router.post('/application', createNewApplication);

export = router;
