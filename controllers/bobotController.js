const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Bobot = require('../models/bobotModel');
const User = require('../models/userModel');

const secret = 'rahasia';

exports.insert = (req, res) => {
  const name = req.body;
  //const hashed = bcrypt.hashSync(password, 10);
  //const newUser = { username, password: hashed };

  Bobot.create(name, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Bobot Baru Berhasil Ditambahkan' });
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
  Bobot.findAll((err, bobots) => {
    if (err) return res.status(500).json(err);
    res.json(bobots);
  });
};
exports.getAllByOrder = (req, res) => {
  Bobot.findByOrder((err, bobots) => {
    if (err) return res.status(500).json(err);
    res.json(bobots);
  });
};
exports.getOne = (req, res) => {
  Bobot.findById(req.params.id, (err, bobots) => {
    if (err || bobots.length === 0) return res.status(404).json({ message: 'Bobot not found' });
    res.json(bobots[0]);
  });
};

exports.update = (req, res) => {
  Bobot.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Bobot updated' });
  });
};

exports.remove = (req, res) => {
  Bobot.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Bobot deleted' });
  });
};