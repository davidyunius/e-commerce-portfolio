const express = require('express');
const router = express.Router();
const Product = require('../controllers/product-controller')


router
  .get('/', Product.viewProduct)
  .post('/add', Product.addProduct)
  .patch('/update/:id', Product.updateProduct)
  .delete('/delete/:id', Product.deleteProduct)

module.exports = router;
