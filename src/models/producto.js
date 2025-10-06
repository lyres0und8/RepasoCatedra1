const {  Model, DataTypes } = require('sequelize')
const database = require('../config/database')

class Producto extends Model {
    static id
    static name
    static price
    static stock
}

Producto.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'Producto',
    tableName: 'productos',
    timestamps: true
})

Producto.associate = (models) => {
    Producto.belongsTo(models.Bodega, { foreignKey: 'bodegaId', as: 'bodega' })
}

Producto.prototype.toJSON = function () {
    const { ...producto } = this.get()
    return producto
}

module.exports = Producto