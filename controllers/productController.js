const Product = require('../models/Product')

const ProductController = {
    createForm (req, res) {
        try {
            res.send(`
            <h1>Create item</h1>
                <form id="createForm" action="/create" method="POST" >
                    <input name ="name" placeholder = "name" />
                    <input name ="size" placeholder = "size" />
                    <input name ="description" placeholder = "description" />
                    <input name ="price" placeholder = "price" />
                    <button id="" type="submit">Create</button>
                </form>
            `)
        } catch (error) {
            console.log(error)
        }
    },
    async create (req, res) {
        try {
            const product = await Product.create({...req.body})
            res.status(201).send(`<p>Item saved in storage</p>`)
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
                        <a href="/id/${product._id}"><h2>${product.name}</h2></a>
                            <h3>${product.size}</h3>
                            <p>${product.description}</p>
                            <h3>${product.price} €</h3>
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
                    <form action="${id}" method="POST">
                        <button type="submit">Borrar</button>
                    </form>
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
                    <input placeholder=${product.name} />
                    <input placeholder=${product.size} />
                    <input placeholder=${product.description} />
                    <input placeholder=${product.price} />
                    <button id="" type="submit">Actualizar</button>
                </form>
            `)

        } catch(error){
            console.log(error)
        }
    }
}

module.exports = ProductController