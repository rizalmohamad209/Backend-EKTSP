'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dinas.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dinas',
  });
  return dinas;
};