import { applyWithoutAccount } from '../controllers/business/scholarship';
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
 *   name: Application
 *   description: All routes for application handling
 */

/**
 * @swagger
 * /application:
 *   post:
 *     summary: Apply for a scholarship
 *     tags: [Application]
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

router.post('/', applyWithoutAccount);

export = router;
