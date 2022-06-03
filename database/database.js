const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas','root','Reanimation',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection