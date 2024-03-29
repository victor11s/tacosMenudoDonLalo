const router = require('express').Router();
const db = require('../db');

//Aritculos

router.get('/get-articulos', function (req, res) {
    const sqlQuery = "SELECT * FROM articulo;";
    db.query(sqlQuery, (error, result) => {
        res.send(result);
    })
});

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
    const id_articulo = req.body.id_articulo;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const stock = req.body.stock;
    const tipo = req.body.tipo;
    const precio_unitario = req.body.precio_unitario;
    const imagen = req.body.imagen;
    
    const noUndefinedFields = id_articulo != undefined && nombre != undefined && descripcion != undefined && stock != undefined && tipo != undefined && precio_unitario != undefined && imagen != undefined;
    const noEmptyFields = id_articulo != "" && nombre != "" && descripcion != "" && stock != "" && tipo != "" && precio_unitario != "" && imagen != "";

    if (noUndefinedFields&&noEmptyFields) {
        const sqlQuery = "UPDATE articulo SET nombre=(?), descripción=(?), stock=(?), tipo=(?), precio_unitario=(?), imagen=(?) WHERE id_articulo=(?);";
        db.query(sqlQuery, [nombre, descripcion, stock, tipo, precio_unitario, imagen, id_articulo], (error, result) => {
            //res.json({ message: 'sesión' });
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
        response.send('Introduzca correctamente los datos');
        //console.log([nombre, tipo, precio_unitario, imagen]);
        response.end();
    }
});

router.delete('/delete', function (req, response) {
    const id_articulo = req.body.id_articulo;
    
    const noUndefinedFields = id_articulo != undefined ;
    const noEmptyFields = id_articulo != "";

    if (noUndefinedFields&&noEmptyFields) {
        const sqlQuery = "DELETE FROM articulo WHERE id_articulo=(?);";
        db.query(sqlQuery, [id_articulo], (error, result) => {
            //res.json({ message: 'sesión' });
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


router.post('/delete' , function (req, response) {
    const id_articulo = req.body.id;
    const sqlQuery = "DELETE FROM articulo WHERE id_articulo = (?);";
    db.query(sqlQuery,[id_articulo], (error, result) => {
        if (error) throw error;
        if (result.affectedRows > 0) {
            response.send(true);
        } else {
            response.send(false);
        }
    });
});

//Usuarios
router.post('/getAdmin', function (req, res) {
    const nombre_usuario = req.body.id;
    console.log(nombre_usuario);
    const sqlQuery = "SELECT nombre_usuario, nombre, direccion FROM usuario WHERE nombre_usuario = (?);";
    db.query(sqlQuery, [nombre_usuario], (error, result) => {
        res.send(result);
    });
});

router.post('/updateUser' , function (req, response) {
    const nombre_usuario = req.body.id;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    console.log([nombre, direccion, nombre_usuario]);
    const sqlQuery = "UPDATE usuario SET nombre = (?), direccion = (?) WHERE nombre_usuario = (?);";
    db.query(sqlQuery,[nombre, direccion, nombre_usuario], (error, result) => {
        if (error) throw error;
        if (result.affectedRows > 0) {
            response.send(true);
        } else {
            response.send(false);
        }
    });
});

module.exports = router;