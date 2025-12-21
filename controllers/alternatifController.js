const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Alternatif = require('../models/alternatifModel');
const User = require('../models/userModel');

const secret = 'rahasia';

exports.insert = (req, res) => {
  const name = req.body;
  //const hashed = bcrypt.hashSync(password, 10);
  //const newUser = { username, password: hashed };

  Alternatif.create(name, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Karyawan Baru Berhasil Ditambahkan' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id_user, username: user.username }, secret, { expiresIn: '1d' });
    res.json({ token });
  });
};

exports.getAll = (req, res) => {
  Alternatif.findAll((err, users) => {
    if (err) return res.status(500).json(err);
    res.json(users);
  });
};

exports.update = (req, res) => {
  Alternatif.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Bobot updated' });
  });
};

exports.remove = (req, res) => {
  Alternatif.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Bobot deleted' });
  });
};