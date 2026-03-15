const jwt = require('jsonwebtoken');
const SECRET = 'super-secret-key-228';

module.exports = (role) => (req, res, next) => {
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