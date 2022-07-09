'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kepsek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kepsek.init({
    namaKepsek: DataTypes.STRING,
    emailKepsek: DataTypes.STRING,
    alamatKepsek: DataTypes.STRING,
    fotoKepsek: DataTypes.STRING,
    nipKepsek: DataTypes.BIGINT,
    golKepsek: DataTypes.STRING,
    nikKepsek: DataTypes.BIGINT,
    npwpKepsek: DataTypes.STRING,
    noHpKepsek: DataTypes.BIGINT,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kepsek',
  });
  return kepsek;
};