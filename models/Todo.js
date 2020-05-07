// models/Todo.js
var Sequelize = require('sequelize');
var sequelize = require('../db');

class Todo extends Sequelize.Model {}

Todo.init({
    id: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'todo',
});

module.exports = Todo;
