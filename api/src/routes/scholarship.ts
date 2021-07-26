
import { addNewScholarship, filterScholarships, getScholarshipDetails } from 'controllers/business/scholarship';
import express from 'express';

const router = express.Router();

// all routes starts with '/scholarship'
router.get('/:_id', getScholarshipDetails);
router.post('/', filterScholarships); // should be [GET], but due to ammount and complexity of data not possible.
router.post('/new', addNewScholarship);

export = router;
