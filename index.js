const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
PORT = process.env.PORT || 3000
const routes = require('./routes/productRoutes')

app.use('/', routes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})