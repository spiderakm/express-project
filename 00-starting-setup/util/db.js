const mysql = require('mysql');

const pool = mysql.createPool({
    hots:'localhost',
    user:'root',
    database:'node-complete',
    password:'nodecomplete'
})

module.exports = pool.promise();