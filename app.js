require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('../routes/userRoutes');
const alternatifRoutes = require('../routes/alternatifRoutes');
const bobotRoutes = require('../routes/bobotRoutes');
const evaluationsRoutes = require('../routes/evaluationsRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', alternatifRoutes);
app.use('/api', bobotRoutes);
app.use('/api', evaluationsRoutes);

// ⛔ TIDAK ADA app.listen
module.exports = app;
