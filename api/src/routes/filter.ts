import express from 'express';
import { filterScholarships } from '../controllers/business/scholarship';

const router = express.Router();

router.post('/scholarship', filterScholarships); // should be [GET], but due to ammount and complexity of data not possible.

export = router;
