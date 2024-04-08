const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        name:String,
        size:String,
        description:String,
        price:Number,
    }, {timestamps: true}
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product