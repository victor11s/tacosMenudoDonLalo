//Configuración de express
const express = require('express'); //llamamos a Express
const app = express();
const port = process.env.PORT || 3001;  // establecemos nuestro puerto

//Importamos mysql
//const mysql = require('mysql');

//Importamos body-parser para analizar los cuerpos de las solicitudes entrantes como middleware.
const bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(port, () => {
    console.log('API Rest Activa')
});
