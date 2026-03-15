const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const SECRET = 'super-secret-key-228';

const authorize = (role) => (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Нет токена' });

    try {
        const decoded = jwt.verify(token, SECRET);
        if (role && decoded.role !== role) return res.status(403).json({ error: 'Нет доступа' });
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ error: 'Неверный токен' });
    }
};

app.get('/api/computers', (req, res) => {
    res.json({ message: 'Список компьютеров' });
});

app.post('/api/computers', authorize('admin'), (req, res) => {
    res.json({ message: 'Компьютер успешно добавлен' });
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));