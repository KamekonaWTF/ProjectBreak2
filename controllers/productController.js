const Product = require('../models/Product')

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create({...req.body})
            res.status(201).send(product)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductController