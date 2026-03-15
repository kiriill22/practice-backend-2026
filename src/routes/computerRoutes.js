const express = require('express');
const router = express.Router();
const controller = require('../controllers/computerController');
const authorize = require('../middleware/auth');

router.get('/', controller.getAll);
router.post('/', authorize('admin'), controller.create);

module.exports = router;