exports.getAll = (req, res) => {
    res.json({ message: 'Список компьютеров из базы' });
};

exports.create = (req, res) => {
    res.json({ message: 'Компьютер успешно добавлен в базу' });
};