const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'cursos',
    username: 'postgres',
    password: "root",
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

module.exports = db;