const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const UserCourses = db.define('usercourses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
    },
});

module.exports = UserCourses;