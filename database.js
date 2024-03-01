const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'netpassword321',
  database: 'netdb'
});
module.exports = connection;