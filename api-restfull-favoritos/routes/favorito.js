'use strict'

var express = require('express')

var favoritoControllers = require('../controllers/favorito.js')

var api = express.Router()

api.get('/prueba/:nombre?', favoritoControllers.prueba)

module.exports = api