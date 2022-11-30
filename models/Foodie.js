const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Foodie extends Model {}

Foodie.init(
    {
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false
      }
  
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'foodie',
    }
  );

module.exports = Foodie;