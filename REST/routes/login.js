const router = require('express').Router();
const db = require('../db');

router.get('/login', function (req, res) {
    res.json({ message: 'Vas a iniciar sesión' })
})

router.post('/login', (req, response) => {
    const nombre_usuario = req.body.nombre_usuario;
    const password = req.body.password;
    console.log(nombre_usuario, password)
    if (nombre_usuario != undefined && password != undefined) {
        const sqlQuery = "SELECT nombre_usuario, password FROM usuario WHERE nombre_usuario = (?) AND password = (?)";
        db.query(sqlQuery, [nombre_usuario, password], (error, result) => {
            //res.json({ message: 'Vas a iniciar sesión' });
            if (error) throw error;

            if (result.length > 0) {
                // Authenticate the user
                response.send(true);
            } else {
                response.send(false);
            }
        });

    } else {
        response.send('Introduzca un nombre de usuario y contraseña!');
        response.end();
    }

});

router.post('/signin', (req, response) => {
    const nombre_usuario = req.body.nombre_usuario;
    const password = req.body.password;
    const direccion = req.body.direccion;
    console.log("Datos: "+nombre_usuario +" && "+ password)
    if (nombre_usuario != undefined && password != undefined) {
        const sqlQuery = "CALL RegistroUsuario((?),(?),(?))";
        db.query(sqlQuery, [nombre_usuario, password, direccion], (error, result) => {
            // console.log(result); 
            if (error) throw error;
            if (result[0] == undefined) { //mysl retorna undefined si se insertó correctamente.
                // Authenticate the user
                response.send(true);
            } else {
                response.send(false);
            }
        });


    } else {
        response.send('Introduzca un nombre de usuario y contraseña!');
        response.end();
    }

});
module.exports = router;