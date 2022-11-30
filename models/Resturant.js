const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Resturant extends Model {}

Resturant.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false
      },
      APIID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      }
  
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'resturant',
    }
  );

module.exports = Resturant;