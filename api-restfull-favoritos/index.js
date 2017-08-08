'use strict'

var app = require('./app')

var port = process.env.PORT || 3678

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/favoritos', (err, res) => {
    if (err) {
        console.log(`Error al conectar a mongo ${err}`)
    } else {
        console.log('Mongo conectado...')
        app.listen(port, function() {
            console.log(`Api rest favoritos corriendo por el puerto ${port}`)
            console.log('nodemon corriendo')
        })
    }
})