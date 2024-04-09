const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const ProductController = require('../controllers/productController')

router.post('/create', ProductController.create)
router.get('/', ProductController.getAllProducts)
router.get('/getAll', ProductController.productsSSR)

module.exports = router