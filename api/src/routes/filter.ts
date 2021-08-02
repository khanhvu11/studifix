import express from 'express';
import { filterScholarships } from '../controllers/business/scholarship';

const router = express.Router();

/**
 * Normally you would use an get with query params to filter scholarships, but due to ammount and complexity of data
 * we descided to do it that way. This part isn't REST conform.
 * Todo: rework filter process and use query params. Also see comments in scholarship routes.
 */
router.post('/scholarships', filterScholarships);

export = router;
