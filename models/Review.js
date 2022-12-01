const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
    {
      RevID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      DatePosted: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Imageurl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Foodie_User: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Resturant_ID: {
        type: DataTypes.STRING,
        allowNull: false
      }
  
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'review',
    }
  );

module.exports = Review;