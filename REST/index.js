//Configuración de express
const express = require('express'); //llamamos a Express
const app = express();
const port = process.env.PORT || 3001;  // establecemos nuestro puerto

//Importamos y configuramos mysql
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tacos_y_menudo_don_lalo'
});

//Importamos body-parser para analizar los cuerpos de las solicitudes entrantes como middleware.
const bodyParser = require('body-parser');

//Añadimos el router
const router = require('./routes/router');
app.use('/api', router);

//añadimos cors
const cors = require('cors');
app.use(cors());

//Configuramos la instancia app de express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());







app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(port, () => {
    console.log('API Rest Activa')
});
