const mysql = require('mysql');
const util = require('util');
const connection = mysql.createConnection({
    host     : '<HOST>',
    user     : '<USER>',
    database : '<DATABASE>'
  });

// node native promisify
const query = util.promisify(connection.query).bind(connection);

module.exports = { 
  connection, 
  query 
}