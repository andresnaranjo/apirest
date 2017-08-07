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

module.exports = {
    prueba
}