const router = require('express').Router();
const db = require('../db');

router.get('/getTacos', function (req, res) {
    const sqlQuery = "SELECT * FROM articulo WHERE tipo = 'Tacos y caldos'";
    db.query(sqlQuery, (error, result) => {
        res.send(result);
    })

});

router.get('/getRefrescos', function (req, res) {
    const sqlQuery = "SELECT * FROM articulo WHERE tipo = 'Refrescos'";
    db.query(sqlQuery, (error, result) => {
        res.send(result);
    });
});

module.exports = router;