'use strict';
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
    operatorId: DataTypes.UUID,
    sekolahId: DataTypes.UUID,
    ektsp: DataTypes.JSONB,
    status: DataTypes.STRING,
    pdfUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ktsp',
  });
  return ktsp;
};