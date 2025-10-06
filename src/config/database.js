const { Sequelize } = require('sequelize')

const database = new Sequelize({
    dialect: 'sqlite',
    storage: `./src/database/${process.env.DB_NAME}.sqlite`,
    logging: false
})

module.exports = database