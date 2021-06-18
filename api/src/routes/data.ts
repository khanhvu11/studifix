import express from 'express';
import { resolveFilterData, resolveApplicationData, filterScholarships, getSingleScholarshipByID, checkForValidApplication } from '../content/data';

const router = express.Router();

router.get('/filterdata', resolveFilterData);
router.get('/applicationdata', resolveApplicationData);
router.post('/filter/scholarships', filterScholarships);
router.get('/filter/scholarships/:_id', getSingleScholarshipByID);
router.post('/apply/:_id', checkForValidApplication);

export = router;
