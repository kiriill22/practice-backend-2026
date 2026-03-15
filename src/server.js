const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.use(express.json());

app.use('/api/computers', require('./routes/computerRoutes'));

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));