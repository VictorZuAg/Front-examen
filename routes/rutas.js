'use strict'

const express = require('express')
const controlador = require('../controllers/controlador')

const api = express.Router()

api.get('/usuarios', controlador.Usuarios)
api.get('/compras/:id', controlador.Compras)

module.exports = api