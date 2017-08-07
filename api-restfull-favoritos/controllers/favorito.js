'use strict'

function prueba(req, res) {
    var nombre = 'indefinido'
    if (req.params.nombre) {
        nombre = req.params.nombre
    }

    res.status(200).send({
        data: [2, 3, 4],
        message: 'devolver desde nodejs',
        name: nombre
    })
}

function getFavorito(req, res) {
    var favoritoId = req.params.id
    res.status(200).send({ mensaje: 'desde la api favorito ' + favoritoId })
}

function getFavoritos(req, res) {
    res.status(200).send({ data: 'datos' })
}

function saveFavorito(req, res) {
    var params = req.body
    res.status(200).send({ save: true, favorito: params })
}

function updateFavorito(req, res) {
    var params = req.body
    res.status(200).send({ update: true, favorito: params })
}

function deleteFavorito(req, res) {
    var params = req.body
    res.status(200).send({ delete: true, favorito: params })
}


module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}