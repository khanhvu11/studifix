import { addUser, getToken } from '../controllers/business/user';
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
 *   name: User
 *   description: All user routes
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Loogin Route to start session via JWT
 *     tags: [User]
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
router.post('/login', getToken);

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register route to create user account and start session via JWT
 *     tags: [User]
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
router.post('/register', addUser);

export = router;
