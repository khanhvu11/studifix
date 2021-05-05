import express from 'express';
import dataContent from '../content/data';

const router = express.Router();

router.get('/selectiondata', dataContent.resolveSelectionData);
router.post('/filter/scholarships', dataContent.filterScholarships);

export = router;