const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const productValidation = [
  check('name', 'Name is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('pricePerDay', 'Valid price required').isFloat({ min: 0 }),
  check('size', 'Invalid size').isIn(['S', 'M', 'L', 'XL']),
  check('category', 'Invalid category').isIn(['Casual', 'Formal', 'Party', 'Traditional'])
];

router.route('/')
  .post(productValidation, createProduct)
  .get(getProducts);

router.route('/:id')
  .put(productValidation, updateProduct)
  .delete(deleteProduct);

module.exports = router;