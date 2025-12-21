const db = require('../include/db');

const Evaluations = {
    create: (data, callback) => {
    const sql = 'INSERT INTO saw_evaluations SET ?';
    db.query(sql, data, callback);
  },
  /**findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM saw_criterias WHERE username = ?';
    db.query(sql, [username], callback);
  },**/
  findByGroupOrder: (callback) => {
    db.query('SELECT a.id_alternative, b.name, SUM(IF(a.id_criteria=1,a.value,0)) AS C1, SUM(IF(a.id_criteria=2,a.value,0)) AS C2, SUM(IF(a.id_criteria=3,a.value,0)) AS C3, SUM(IF(a.id_criteria=4,a.value,0)) AS C4, SUM(IF(a.id_criteria=5,a.value,0)) AS C5 FROM saw_evaluations a JOIN saw_alternatives b USING(id_alternative) GROUP BY a.id_alternative ORDER BY a.id_alternative', callback);
  },
  findByBenefitGroupOrder: (X, callback) => {
    //X = {1: [],2: [],3: [],4: [],5: []};
    //const sql = "SELECT a.id_alternative, alt.name, SUM(IF(a.id_criteria = 1,IF(b.attribute = 'benefit',a.value / " .  Math.max(X[1]) . "," . Math.min(X[1]) . " / a.value),0)) AS C1,SUM(IF(a.id_criteria = 2,IF(b.attribute = 'benefit',a.value / " . Math.max(X[2]) . "," . Math.min(X[2]) . " / a.value),0)) AS C2,SUM(IF(a.id_criteria = 3,IF(b.attribute = 'benefit',a.value / " . Math.max(X[3]) . "," . Math.min(X[3]) . " / a.value),0)) AS C3,SUM(IF(a.id_criteria = 4,IF(b.attribute = 'benefit',a.value / " . Math.max(X[4]) . "," . Math.min(X[4]) . " / a.value),0)) AS C4,SUM(IF(a.id_criteria = 5,IF(b.attribute = 'benefit',a.value / " . Math.max(X[5]) . "," Math.min(X[5]) . " / a.value),0)) AS C5 FROM saw_evaluations a JOIN saw_criterias b USING (id_criteria) JOIN saw_alternatives alt ON a.id_alternative = alt.id_alternative GROUP BY a.id_alternative ORDER BY a.id_alternative";
    const sql = `SELECT a.id_alternative, alt.name, SUM(IF(a.id_criteria = 1,IF(b.attribute = 'benefit',a.value / ${Math.max(...X[1])} , ${Math.min(...X[1])} / a.value),0)) AS C1,SUM(IF(a.id_criteria = 2,IF(b.attribute = 'benefit',a.value /  ${Math.max(...X[2])} , ${Math.min(...X[2])} / a.value),0)) AS C2,SUM(IF(a.id_criteria = 3,IF(b.attribute = 'benefit',a.value / ${Math.max(...X[3])} , ${Math.min(...X[3])} / a.value),0)) AS C3,SUM(IF(a.id_criteria = 4,IF(b.attribute = 'benefit',a.value / ${Math.max(...X[4])} , ${Math.min(...X[4])}/ a.value),0)) AS C4,SUM(IF(a.id_criteria = 5,IF(b.attribute = 'benefit',a.value / ${Math.max(...X[5])} , ${Math.min(...X[5])} / a.value),0)) AS C5 FROM saw_evaluations a JOIN saw_criterias b USING (id_criteria) JOIN saw_alternatives alt ON a.id_alternative = alt.id_alternative GROUP BY a.id_alternative ORDER BY a.id_alternative`;
  db.query(sql, [X], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM saw_evaluations', callback);
  },
  findByOrder: (id, callback) => {
    db.query('SELECT weight FROM saw_evaluations ORDER BY id_alternative', [id], callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM saw_evaluations WHERE id_alternative = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE saw_evaluations SET ? WHERE id_alternative = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM saw_evaluations WHERE id_alternative = ?', [id], callback);
  }
};

module.exports = Evaluations;