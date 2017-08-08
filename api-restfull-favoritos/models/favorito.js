'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var favoritoSchema = Schema({
    title: String,
    url: String,
    description: String
})

module.exports = mongoose.model('favorito', favoritoSchema)