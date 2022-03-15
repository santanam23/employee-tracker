const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'R@m!r3Z*1',
  database: 'employee_db'
});

module.exports = db;
