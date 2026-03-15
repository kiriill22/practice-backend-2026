const express = require('express');
const router = express.Router();
const controller = require('../controllers/computerController');
const auth = require('../middleware/auth');

router.get('/', controller.getAll);
router.post('/', auth('admin'), controller.create); 

module.exports = router;