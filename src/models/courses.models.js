const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Courses = db.define('courses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Courses;