'use strict'

const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    port: 3306,
    database: 'examen'
})

conexion.connect()

function Usuarios(req, res) {
    conexion.query('Select * from usuarios', (err, rows, fields)=>{
        if (err) throw err;
        res.status(200).send(rows)
    })
}
function Compras(req, res) {
    let usuarioId = req.params.id
    conexion.query('Select * from compras where idusuario = ?',[usuarioId], (err, rows, fields)=>{
        if (err) throw err;
        res.status(200).send(rows)
    })
}
module.exports = {
    Usuarios,
    Compras
}