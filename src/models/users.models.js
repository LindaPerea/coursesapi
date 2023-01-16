const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name"
        
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name"
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
});

module.exports = Users;