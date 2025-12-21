const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const secret = 'rahasia';

exports.register = (req, res) => {
  const { username, password } = req.body; // hanya username & password
  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { username, password: hashed }; // tanpa role

  User.create(newUser, (err) => {
    if (err) {
      console.error(err); // log error nyata
      return res.status(500).json({ message: 'Internal Server Error', error: err });
    }
    res.json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body; // hapus role

  User.findByUserData(username, (err, results) => {
    if (err || results.length === 0) 
      return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id_user, username: user.username }, secret, { expiresIn: '1d' });
    const dataUser = { id: user.id_user, username: user.username };
    res.json({ dataUser, token });
  });
};