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

/**
 * @swagger
 * components:
 *   schemas:
 *     Scholarship:
 *       type: object
 *       required:
 *         - name
 *         - link
 *       properties:
 *         id:
 *              type: string
 *              description: The auto-generated id of scholarship
 *         name:
 *              type: string
 *              description: The Scholarships Name
 *         link:
 *              type: object
 *              properties:
 *                  values:
 *                      type: string
 *                      description: The link itself
 *                  localization:
 *                      type: object
 *                      description: The links localizations
 *                      properties:
 *                          id:
 *                              type: string
 *                          label:
 *                              type: string
 *                          title:
 *                              type: object
 *                              properties:
 *                                  DE:
 *                                      type: string
 *                                  EN:
 *                                      type: string
 *                                  FR:
 *                                      type: string
 *                          description:
 *                              type: object
 *                              properties:
 *                                  DE:
 *                                      type: string
 *                                  EN:
 *                                      type: string
 *                                  FR:
 *                                      type: string
 *
 *
 *
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: Scholarships
 *   description: The Scholarships - API
 */

/**
 * @swagger
 * /data/scholarship/{id}:
 *   get:
 *     summary: Returns a specific scholarship by id
 *     tags: [Scholarships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: Specific Scholarship
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Scholarship'
 */
