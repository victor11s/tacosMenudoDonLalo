//Configuración de express
const express = require('express'); //llamamos a Express
const app = express();
const port = process.env.PORT || 3001;  // establecemos nuestro puerto

const db = require('./db');

//Importamos body-parser para analizar los cuerpos de las solicitudes entrantes como middleware.
const bodyParser = require('body-parser');

//añadimos cors
const cors = require('cors');
app.use(cors());


//Configuramos la instancia app de express
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Añadimos el router
const router = require('./routes/router');
app.use('/api', router);








app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(port, () => {
    console.log('API Rest Activa')
});
