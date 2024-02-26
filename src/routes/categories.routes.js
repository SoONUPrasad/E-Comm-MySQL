const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controllers');

/**
 * @swagger
 * /api/categories:
 *   get:
 *     description: Get a list of categories
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get('/', categoryController.getCategories);

module.exports = router;
