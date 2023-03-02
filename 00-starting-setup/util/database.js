const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodestart','root','nodecomplete',{
    dialect:'mysql',
    host: 'localhost'
})


module.exports = sequelize;