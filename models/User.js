// models/User.js
var Sequelize = require('sequelize');
var sequelize = require('../db');
var Todo = require('./Todo');

class User extends Sequelize.Model {}

User.init({
    id: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'user',
});

User.hasMany(Todo);

module.exports = User;
