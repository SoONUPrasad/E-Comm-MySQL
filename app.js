// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./src/db/config');

const app = express();
const sequelize = new Sequelize(config.development);

app.use(bodyParser.json());

// Import routes and use them
app.use('/api/categories', require('./src/routes/categories.routes'));
app.use('/api/products', require('./src/routes/products.routes'));
app.use('/api/auth', require('./src/routes/user.routes'));

// Swagger setup
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
