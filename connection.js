const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "washie@dev",
    database: "farmerslinkdb",
    connectionLimit: 100
});
module.exports={pool}