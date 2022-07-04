'use strict';
const { Sequelize } = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: Sequelize.DataTypes.ENUM(["sekolah", "pengawas", "dinas"]),
      defaultValue: "sekolah",
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};