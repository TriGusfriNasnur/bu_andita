const db = require('../include/db');

const Bobot = {
    create: (data, callback) => {
    const sql = 'INSERT INTO saw_criterias SET ?';
    db.query(sql, data, callback);
  },
  /**findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM saw_criterias WHERE username = ?';
    db.query(sql, [username], callback);
  },**/
  findAll: (callback) => {
    db.query('SELECT * FROM saw_criterias', callback);
  },
  findByOrder: (id, callback) => {
    db.query('SELECT weight FROM saw_criterias ORDER BY id_criteria', [id], callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM saw_criterias WHERE id_criteria = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE saw_criterias SET ? WHERE id_criteria = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM saw_criterias WHERE id_criteria = ?', [id], callback);
  }
};

module.exports = Bobot;