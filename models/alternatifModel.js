const db = require('../include/db');

const Alternatif = {
    create: (data, callback) => {
    const sql = 'INSERT INTO saw_alternatives SET ?';
    db.query(sql, data, callback);
  },
  /**findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM saw_alternatives WHERE username = ?';
    db.query(sql, [username], callback);
  },**/
  findAll: (callback) => {
    db.query('SELECT * FROM saw_alternatives', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM saw_alternatives WHERE id_alternative = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE saw_alternatives SET ? WHERE id_alternative = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM saw_alternatives WHERE id_alternative = ?', [id], callback);
  }
};

module.exports = Alternatif;