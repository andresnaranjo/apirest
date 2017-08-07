'use strict'
/**
 * se implementa express para ejecutar un servidor
 */
var express = require('express')
var app = express()

app.listen(3678, function() {
    console.log('Api rest favoritos corriendo')
})