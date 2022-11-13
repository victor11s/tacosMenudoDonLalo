var router = require('express').Router()
let login = require('./login')
router.use('/', login);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router