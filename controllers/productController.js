const Product = require('../models/Product')

const ProductController = {
    async create (req, res) {
        try {
            const product = await Product.create({...req.body})
            res.status(201).send(product)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllProducts (req, res) {
        try {
            const product = await Product.find()
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },
    async productsSSR (req, res) {
        try{
            const product = await Product.find()
            res.send(`
                <h1>Inventario</h1>
                ${product.map(product => {
                    return (
                        `<div>
                            <h2>${product.name}</h2>
                            <h3>${product.size}</h3>
                            <p>${product.description}</p>
                            <h3>${product.price}</h3>
                        </div>`
                    )
                }).join('')}
            `)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductController