'use strict'

var app = require('./app')

var port = process.env.PORT || 3678

app.listen(port, function() {
    console.log(`Api rest favoritos corriendo por el puerto ${port}`)
    console.log('nodemon corriendo')
})