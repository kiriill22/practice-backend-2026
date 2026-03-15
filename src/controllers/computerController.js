const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
    try {
        const computers = await prisma.computer.findMany();
        res.json(computers);
    } catch (error) {
        res.status(500).json({ error: "Ошибка при получении списка компьютеров" });
    }
};

exports.create = async (req, res) => {
    try {
        const { name, status } = req.body;
        const newComputer = await prisma.computer.create({
            data: { name, status }
        });
        res.status(201).json(newComputer);
    } catch (error) {
        res.status(500).json({ error: "Ошибка при создании компьютера" });
    }
};