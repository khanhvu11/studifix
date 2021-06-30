import express from 'express';
import { resolveFilterData, resolveApplicationData, filterScholarships, applyWithoutAccount, getScholarshipDetails, addNewScholarship } from '../controllers/business/scholarship';

const router = express.Router();

//todo: rework api endpoints to meet REST Requirements
router.get('/filterdata', resolveFilterData);
router.get('/applicationdata', resolveApplicationData);
router.get('/scholarship/:_id', getScholarshipDetails);
router.post('/filter/scholarships', filterScholarships);
router.post('/application', applyWithoutAccount);
router.post('/scholarships', addNewScholarship);

export = router;
