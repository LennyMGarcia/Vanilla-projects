var express = require('express');
const res = require('express/lib/response');
var mysql = require('mysql');
var cors = require("cors");
//hace que se pueda acceder a todos los metodos y propiedades de la libreria express
var app = express();
app.use(express.json()); //usa JSON
app.use(cors());

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosdb'
});
conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("funciona correctamente")
    }
})

// la barra es cuando acceda a la raiz
app.get('/', function (req, res) {
    res.send("ruta inicio");
});
//mostrar todos los articulos
app.get('/api/articulos', (req, res) => {
    conexion.query('SELECT * FROM articulos', function (error, filas) {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
})

//el parametro requerido se va al signo de pregunta
app.get('/api/articulos/:id', (req, res) => {
    conexion.query('SELECT * FROM articulos WHERE id = ?', [req.params.id], function (error, fila) {
        if (error) {
            throw error;
        } else {
            res.send(fila);
            //res.send(fila[0].descripcion);

        }
    });
})

app.post('/api/articulos', (req, res) => {
    let data = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock
    };

    let sql = 'INSERT INTO articulos SET ?'; //como setea los datos el signo de interrogacion

    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

app.put('/api/articulos/:id', (req, res) => {
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, stock = ? WHERE id = ?"

    conexion.query(sql, [descripcion, precio, stock, id], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

app.delete('/api/articulos/:id', (req, res) => {
    conexion.query('DELETE FROM articulos  WHERE id = ?', [req.params.id], function (error, filas) {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    })
})

//evitar conflicto de ocupacion creando variable de entorno
const puerto = process.env.PUERTO || 3000;

//la funcion revisa si hay errores
//el servidor escucha las conexiones en un determinado puerto logico de la pc, el mas usado es el 3000
app.listen(puerto, function () {
    console.log("is ok in " + puerto);
}); 