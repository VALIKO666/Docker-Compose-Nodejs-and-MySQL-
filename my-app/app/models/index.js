const {Sequelize} = require('sequelize');
const config = require('../config/db.config');

const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
    port:config.port,
    operatorsAliases: false,
    pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
    }
})

module.exports = {
    sequelize
};