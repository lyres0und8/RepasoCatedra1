const {  Model, DataTypes } = require('sequelize')
const database = require('../config/database')

class Bodega extends Model {
    static id
    static name
}

Bodega.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'Bodega',
    tableName: 'bodegas',
    timestamps: true
})

Bodega.associate = (models) => {
    Bodega.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    Bodega.hasMany(models.Producto, { foreignKey: 'bodegaId', as: 'productos' })
}

Bodega.prototype.toJSON = function () {
    const { ...bodega } = this.get()
    return bodega
}

module.exports = Bodega