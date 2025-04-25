const express = require('express');
const Product = require('../models/product.models.js');
const router = express.Router();
const {getProducts ,getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/productcontroller.js');


router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', createProduct);
// update a product 
router.put('/:id', updateProduct);

// detete a product 
router.delete('/:id',deleteProduct);



module.exports = router;