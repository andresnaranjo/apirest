'use strict'

var Favorito = require('../models/favorito.js')

function getFavorito(req, res) {

    var id = req.params.id

    Favorito.findById(id, (err, data) => {
        if (err) {
            res.status(500).send({ err: 'Error al devolver el registro' })
        }

        if (!data) {
            res.status(404).send({ err: 'no existen registros' })
        }

        res.status(200).send(data)
    })

}

function getFavoritos(req, res) {
    Favorito.find({}).sort('title').exec((err, data) => {
        if (err) {
            res.status(500).send({ error: 'Error al traer datos' })
        }

        if (!data) {
            res.status(404).send({ error: 'No existen registros' })
        }

        res.status(200).send({ data })
    })
}

function saveFavorito(req, res) {
    var favoritoModelo = new Favorito()
    var params = req.body

    favoritoModelo.title = params.title
    favoritoModelo.url = params.url
    favoritoModelo.description = params.description

    favoritoModelo.save((err, data) => {
        if (err) {
            res.status(500).send({ error: err })
        }
        res.status(200).send({ data: data })
    })

}

function updateFavorito(req, res) {
    var id = req.params.id
    var body = req.body

    Favorito.findByIdAndUpdate(id, body, (err, data) => {
        if (err) {
            res.status(500).send({ err: 'Error al actualizar' })
        }

        res.status(200).send(data)
    })
}

function deleteFavorito(req, res) {
    var id = req.params.id

    Favorito.findByIdAndRemove(id, (err, data) => {
        if (err) {
            res.status(500).send({ err: 'Error al eliminar registro' })
        }
        res.status(200).send(data)
    })
}


module.exports = {
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}