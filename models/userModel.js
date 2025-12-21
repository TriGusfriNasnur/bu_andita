const db = require('../include/db');

const User = {
  create: (data, callback) => {
    const sql = 'INSERT INTO saw_users SET ?';
    db.query(sql, data, callback);
  },
  findByUserData: (username, callback) => {
    const sql = 'SELECT * FROM saw_users WHERE username = ?';
    db.query(sql, [username], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM saw_users', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM saw_users WHERE id_user = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE saw_users SET ? WHERE id_user = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM saw_users WHERE id_user = ?', [id], callback);
  }
};

module.exports = User;