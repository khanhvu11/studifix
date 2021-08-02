import { addNewScholarship, getScholarshipDetails } from '../controllers/business/scholarship';
import express from 'express';

const router = express.Router();

/**
 * Filter scholarships route [POST] /scholarships from /fiter domain belongs here
 * Todo: change route in front and backend to [GET] and filter scholarships via query params.
 * Todo: problem is that you can filter by more than one value per attribute.
 */
router.get('/:_id', getScholarshipDetails);
router.post('/', addNewScholarship);

export = router;
