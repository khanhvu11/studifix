import { addNewScholarship, getScholarshipDetails } from '../controllers/business/scholarship';
import express from 'express';

const router = express.Router();

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
 *                      description: The link
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
 */

/**
 * @swagger
 * tags:
 *   name: Scholarship
 *   description: Everything that has to do with creating or requesting specific scholarhip
 */

/**
 * @swagger
 * /scholarships/{id}:
 *   get:
 *     summary: Returns a specific scholarship by id
 *     tags: [Scholarship]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Scholarship ID
 *     responses:
 *       200:
 *         description: Scholarship matching to given ID
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Scholarship'
 */
router.get('/:_id', getScholarshipDetails);

/**
 * @swagger
 * /scholarships:
 *   post:
 *     summary: Create a new scholarship
 *     tags: [Scholarship]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Scholarship ID
 *     responses:
 *       200:
 *         description: Scholarship matching to given ID
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Scholarship'
 */
router.post('/', addNewScholarship);

export = router;
