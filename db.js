var Sequelize = require('sequelize');
var config = require('./db.config.js');

module.exports = new Sequelize(config);
