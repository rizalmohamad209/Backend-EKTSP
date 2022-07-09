'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  operator.init({
    namaOperator: DataTypes.STRING,
    noOperator: DataTypes.BIGINT,
    password: DataTypes.STRING,
    emailOperator: DataTypes.STRING,
    fotoOperator: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'operator',
  });
  return operator;
};