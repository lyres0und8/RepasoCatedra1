const {  Model, DataTypes } = require('sequelize')
const database = require('../config/database')

class User extends Model {
    static id
    static name
    static lastName
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
})

User.associate = (models) => {
    User.hasOne(models.Bodega, { foreignKey: 'userId', as: 'bodega' })
}

User.prototype.toJSON = function () {
    const { ...user } = this.get()
    return user
}

module.exports = User