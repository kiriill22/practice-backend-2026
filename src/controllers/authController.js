const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Имя и пароль обязательны" });
    }

    const newUser = await prisma.user.create({
      data: {
        username: username,
        passwordHash: password,
      },
    });

    res.status(201).json({ message: "Пользователь создан!", userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера при регистрации" });
  }
};