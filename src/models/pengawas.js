'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengawas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.userAccount, {
        as: "useraccounts",
        foreignKey: "id"
      })
    }
  }
  pengawas.init({
    nip: DataTypes.BIGINT,
    nama: DataTypes.STRING,
    golongan: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    unitKerja: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengawas',
  });
  return pengawas;
};