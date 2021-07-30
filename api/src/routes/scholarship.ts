import { addNewScholarship, getScholarshipDetails } from '../controllers/business/scholarship';
import express from 'express';

const router = express.Router();

router.get('/:_id', getScholarshipDetails);
router.post('/', addNewScholarship);

export = router;
