const { CategoriesServices } = require('../services/categories.services');

const createCategories = async ( req, res ) => {
try {
    const newCategory = req.body;
    const result = await CategoriesServices.create(newCategory);
    res.json({
        message: "creando una  nueva categoría",
        data: result,
    });
} catch (error) {
    res.status(400).json({
        error: error.message,
        details: error.stack,                
    });
}
}

module.exports = { createCategories };