const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const ProductController = require('../controllers/productController')

router.get('/create', ProductController.createForm)
router.post('/create', ProductController.create)
router.get('/', ProductController.getAllProducts)
router.get('/getAll', ProductController.productsSSR)
router.get('/id/:_id', ProductController.getById)
router.post('/id/:_id', ProductController.deleteItem)
router.get('/update/:_id', ProductController.updateForm)
router.post('/update/:_id', ProductController.updateItem)

module.exports = router