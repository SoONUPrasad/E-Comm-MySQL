const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controllers');

/**
 * @swagger
 * /api/products:
 *   get:
 *     description: Get a list of products
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get('/', productController.getProducts);

module.exports = router;
