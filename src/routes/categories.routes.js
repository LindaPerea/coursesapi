const { Router } = require('express');

const { createCategories } = require('../controllers/categories.controller');

const router = Router();

router.post('/categories', createCategories);

module.exports = router;