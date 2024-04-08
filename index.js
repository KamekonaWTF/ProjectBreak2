const express = require('express')
const app = express()
PORT = 3000

app.get('/',(req, res) => (res.send('Proyecto back')))

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})