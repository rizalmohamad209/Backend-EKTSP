'use strict';
const { Sequelize } = require("sequelize");


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ktsp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sekolah, {
        as: "sekolahs",
        foreignKey: "sekolahId"
      })
    }
  }
  ktsp.init({
    pengawasId: DataTypes.UUID,
    sekolahId: DataTypes.UUID,
    ektsp: DataTypes.JSONB,
    status: DataTypes.STRING,
    pdfUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ktsp',
  });

  ktsp.addHook('beforeUpdate', (instance, options) => {
    console.log(instance._changed.has('pdfUrl'));
    if (instance._changed.has('ektsp') && !instance._changed.has('pdfUrl')) {

      instance.setDataValue("status", "Sudah Terisi")
    } else if (instance._changed.has('ektsp') && instance._changed.has('pdfUrl')) {
      instance.setDataValue("status", "Terverifikasi")
    }


  })
  return ktsp;
};