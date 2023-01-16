const Categories = require("../models/categories.models");

class CategoriesServices {
    
    static async create(category) {
        try {
            const result = await Categories.create(category);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoriesServices;