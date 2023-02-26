const path = require('path');

const express = require('express');

const productController = require('../controller/product')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productController.addProduct)

// /admin/add-product => POST
router.post('/add-product',productController.postaddProducts)


module.exports = router
