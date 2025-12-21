require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ← tambahkan ini
const app = express();

const userRoutes = require('./routes/userRoutes');
const alternatifRoutes = require('./routes/alternatifRoutes');
const bobotRoutes = require('./routes/bobotRoutes');
const evaluationsRoutes = require('./routes/evaluationsRoutes');

app.use(cors()); // ← tambahkan ini sebelum routes
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', alternatifRoutes);
app.use('/api', bobotRoutes);
app.use('/api', evaluationsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));