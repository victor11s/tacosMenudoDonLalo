var router = require('express').Router()

router.get('/login', function (req, res) {
    res.json({ message: 'Vas a iniciar sesión' })
})

router.post('/login', function (req, res) {
    res.json({ message: 'Vas a iniciar sesión' })
})
module.exports = router