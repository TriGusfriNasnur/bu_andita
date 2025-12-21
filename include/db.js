const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bu_dita'
});

conn.connect(err => {
  if (err) throw err;
  console.log('Database connected');
});

module.exports = conn;