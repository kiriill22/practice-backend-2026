exports.getAll = async (req, res) => {
    res.json({ data: [] });
};

exports.create = async (req, res) => {
    const { name, specs, zone } = req.body;
    res.status(201).json({ message: 'ПК добавлен', body: req.body });
};