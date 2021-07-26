import express from 'express';
import {filterScholarships} from '../controllers/business/scholarship';

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
 *   name: Filter
 *   description: Filter for specific things
 */

/**
 * @swagger
 * /filter/scholarships:
 *   post:
 *     summary: Returns all scholarships that matches sent filter data
 *     tags: [Filter]
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
 router.post('/scholarship', filterScholarships); // should be [GET], but due to ammount and complexity of data not possible.

export = router;
