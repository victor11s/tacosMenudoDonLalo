var router = require('express').Router()

router.get('/login', function (req, res) {
    res.json({ message: 'Vas a iniciar sesión' })
})

router.post('/login', function (req, res) {
    const nombre_usuario = req.body.formEmail;
    const password = req.body.formPassword;
    if (nombre_usuario && password) {
        const sqlQuery = "SELECT nombre_usuario, password FROM usuario WHERE nombre_usuario = (?) AND password = (?)";
        db.query(sqlQuery, [nombre_usuario, password]);
        //res.json({ message: 'Vas a iniciar sesión' });
        if (error) throw error;

        if (res.length > 0) {
            // Authenticate the user
            request.session.loggedin = true;
            request.session.nombre_usuario = nombre_usuario;
            // Redirect to home page
            //response.redirect('/');
        } else {
            res.send('Incorrect Username and/or Password!');
        }	
        
    } else {
        res.send('Introduzca un nombre de usuario y contraseña!');
        res.end();
    }

})
module.exports = router