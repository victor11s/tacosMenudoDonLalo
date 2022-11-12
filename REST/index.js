const express = require('express'); //llamamos a Express
const app = express();
const port = process.env.PORT || 3001  // establecemos nuestro puerto

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(port, () => {
    console.log('API Rest Activa')
});
