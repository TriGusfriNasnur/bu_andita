const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const secret = 'rahasia';

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password){
    return
    res.status(400).json({message:'Username dan Password wajib kidz'});
  }
  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { username, password: hashed, role: 'user' };

  User.create(newUser, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUserData(username, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: 'User not found', });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id_user, username: user.username, role: user.role }, secret, { expiresIn: '1d' });
    const dataUser = { id: user.id_user, username: user.username, role: user.role };
    res.json({ dataUser, token });
  });
};

exports.getAll = (req, res) => {
  User.findAll((err, users) => {
    if (err) return res.status(500).json(err);
    res.json(users);
  });
};

exports.getOne = (req, res) => {
  User.findById(req.params.id, (err, users) => {
    if (err || users.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(users[0]);
  });
};

exports.update = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User updated' });
  });
};

exports.remove = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User deleted' });
  });
};