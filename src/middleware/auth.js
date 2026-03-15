const jwt = require('jsonwebtoken');

module.exports = (requiredRole) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Токен отсутствует' });

    const token = authHeader.split(' ')[1];
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (requiredRole && user.role !== requiredRole) {
            return res.status(403).json({ error: 'Нет доступа' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Невалидный токен' });
    }
};