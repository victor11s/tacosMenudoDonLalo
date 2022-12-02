var router = require('express').Router();
let login = require('./login');
let catalogo = require('./catalogo');
let admin = require('./admin');

router.use('/', login);
router.use('/', catalogo);
router.use('/', admin);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' });
})

module.exports = router