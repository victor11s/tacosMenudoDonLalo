const router = require('express').Router();
const db = require('../db');

router.post('/insert', function (req, response) {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const stock = req.body.stock;
    const tipo = req.body.tipo;
    const precio_unitario = req.body.precio_unitario;
    const imagen = req.body.imagen;
    
    const noUndefinedFields = nombre != undefined && tipo != undefined && precio_unitario != undefined && imagen != undefined;
    const noEmptyFields = nombre != "" && tipo != "" && precio_unitario != "" && imagen != "";

    if (noUndefinedFields&&noEmptyFields) {
        const sqlQuery = "INSERT INTO articulo(nombre, descripción, stock, tipo, precio_unitario, imagen) VALUES ((?), (?), (?), (?), (?), (?));";
        db.query(sqlQuery, [nombre, descripcion, stock, tipo, precio_unitario, imagen], (error, result) => {
            //res.json({ message: 'Vas a iniciar sesión' });
            console.log(result);
            if (error) throw error;
            if (result.affectedRows > 0) {
                // Authenticate the insertion
                response.send(true);
            } else {
                response.send(false);
            }
        });

    } else {
        response.send(false);
        console.log([nombre, descripcion, stock, tipo, precio_unitario, imagen]);
        response.end();
    }
});

router.put('/update', function (req, response) {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const stock = req.body.stock;
    const tipo = req.body.tipo;
    const precio_unitario = req.body.precio_unitario;
    const imagen = req.body.imagen;
    
    const noUndefinedFields = nombre != undefined && tipo != undefined && precio_unitario != undefined && imagen != undefined;
    const noEmptyFields = nombre != "" && tipo != "" && precio_unitario != "" && imagen != "";

    if (noUndefinedFields&&noEmptyFields) {
        const sqlQuery = "UPDATE articulo SET nombre=(?), descripcion=(?), stock=(?), tipo=(?), precio_unitario=(?), imagen=(?)) WHERE id_;";
        db.query(sqlQuery, [nombre, descripcion, stock, tipo, precio_unitario, imagen], (error, result) => {
            //res.json({ message: 'Vas a iniciar sesión' });
            console.log(result);
            if (error) throw error;
            if (result.affectedRows > 0) {
                // Authenticate the insertion
                response.send(true);
            } else {
                response.send(false);
            }
        });

    } else {
        response.send(false);
        //console.log([nombre, tipo, precio_unitario, imagen]);
        response.end();
    }
});


router.get('/getTablaEditar', function (req, res) {
    const sqlQuery = "SELECT * FROM articulo";
    db.query(sqlQuery, (error, result) => {
        res.send(result);
    });
});


router.delete('/delete/:id_articulo ' , function (req, response) {
    const id_articulo = req.body.id_articulo;
    const sqlQuery = "DELETE FROM articulo WHERE id_articulo = (?);";
    db.query(sqlQuery, (error, result) => {
        if (error) throw error;
        if (result) {
            console.log('error');
        } else {
            console.log('success');
        }
    });
});
module.exports = router;