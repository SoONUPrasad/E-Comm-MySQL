const express = require('express');
const router = express.Router();
const authController = require('../controllers/user.controllers');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     description: Register a new user
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     description: Log in an existing user
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.post('/login', authController.login);

module.exports = router;
