'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var port = process.env.PORT || 3678

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.get('/prueba/:nombre?', (req, res) => {
    var nombre = 'indefinido'
    if (req.params.nombre) {
        nombre = req.params.nombre
    }

    res.status(200).send({
        data: [2, 3, 4],
        message: 'devolver desde nodejs',
        name: nombre
    })
})

app.listen(port, function() {
    console.log(`Api rest favoritos corriendo por el puerto ${port}`)
    console.log('nodemon corriendo')
})