'use strict'

var express = require('express')

var favoritoControllers = require('../controllers/favorito.js')

var api = express.Router()

api.get('/prueba/:nombre?', favoritoControllers.prueba)
api.get('/favorito/:id', favoritoControllers.getFavorito)
api.get('/favorito', favoritoControllers.getFavoritos)
api.post('/favorito', favoritoControllers.saveFavorito)
api.put('/favorito/:id', favoritoControllers.updateFavorito)
api.delete('/favorito/:id', favoritoControllers.deleteFavorito)


module.exports = api