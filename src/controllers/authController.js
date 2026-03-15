const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'super_secret_key_2026';

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { username, passwordHash: hashedPassword, role: 'player' }
        });
        res.status(201).json({ message: "Пользователь успешно зарегистрирован", userId: user.id });
    } catch (error) {
        res.status(400).json({ error: "Ошибка регистрации" });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) return res.status(401).json({ error: "Пользователь не найден" });

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(401).json({ error: "Неверный пароль" });

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Успешный вход", token });
    } catch (error) {
        res.status(500).json({ error: "Ошибка сервера" });
    }
};