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
    },
    async getById(req, res) {
        try {
            const id = req.params._id
            const product = await Product.findById(id)
            res.send(`
                <div>
                    <h2>${product.name}</h2>
                    <h3>${product.size}</h3>
                    <p>${product.description}</p>
                    <h3>${product.price}</h3>
                </div> 
            `)
        } catch(error) {
            console.log(error)
        }
    },
    async deleteItem (req, res) {
        try {
            const id = req.params._id
            const product = await Product.findByIdAndDelete(id)
            if(!product) {
                return res.status(404).json({mensaje: 'el item no existe'})
            }
            res.json({mensaje:'El producto ha sido eliminado', product})
        } catch (error) {
            console.log(error)
        }
    },
    async updateItem (req, res) {
        try {
            const id = req.params._id
            const product = {...req.body} 
            const update = await Product.findByIdAndUpdate(id, product)
            res.json({mensaje:"Artículo actualizado", product})
        } catch (error) {
            console.log(error)
        }
    },

    async updateForm (req, res) {
        try {
            const id = req.params._id
            const product= await Product.findById(id)
            res.send(`
                <h1>Actualizar artículo</h1>
                <form id="upform" action="/update/${id}" method="POST">
                    <input id="" placeholder=${product.name} />
                    <input id="" placeholder=${product.size} />
                    <input id="" placeholder=${product.description} />
                    <input id="" placeholder=${product.price} />
                    <button id="" type="submit">Actualizar</button>
                </form>
            `)

        } catch(error){
            console.log(error)
        }
    }
}

module.exports = ProductController