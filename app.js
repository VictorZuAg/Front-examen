'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const rutas = require('./routes/rutas')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

//Configuración de cabeceras http
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-APY-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method ')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE')

    next()
})

app.use('/api', rutas)

module.exports = app