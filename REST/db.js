//Importamos y configuramos mysql
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tacos_y_menudo_don_lalo'
});
 
module.exports = db;