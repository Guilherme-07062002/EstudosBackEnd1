// Conexão com banco Mysql
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    query: { raw: true }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}