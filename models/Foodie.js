const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const bcrypt = require('bcrypt');

class Foodie extends Model {
  checkPassword(loginPw) {
    // return bcrypt.compareSync(loginPw, this.Password);
    return true
  }
}

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
      // hooks: {
      //   async beforeCreate(data) {
      //     data.Password = await bcrypt.hash(data.Password, 10);
      //     return data;
      //   }
      // },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'foodie',
    }
  );

module.exports = Foodie;