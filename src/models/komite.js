'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class komite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  komite.init({
    namaKomite: DataTypes.STRING,
    noHpKomite: DataTypes.BIGINT,
    emailKomite: DataTypes.STRING,
    password: DataTypes.STRING,
    alamatKomite: DataTypes.STRING,
    fotoKomite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'komite',
  });
  return komite;
};