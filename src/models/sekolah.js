'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ktsp, {
        as: "ktsps",
        foreignKey: "id"
      })
    }
  }
  sekolah.init({
    idSekolah: DataTypes.INTEGER,
    kodeSekolah: DataTypes.STRING,
    komiteId: DataTypes.UUID,
    kepsekId: DataTypes.UUID,
    operatorId: DataTypes.UUID,
    namaSekolah: DataTypes.STRING,
    emailSekolah: DataTypes.STRING,
    status: DataTypes.STRING,
    alamatSekolah: DataTypes.STRING,
    kecamatanSekolah: DataTypes.STRING,
    kodePos: DataTypes.INTEGER,
    telpon: DataTypes.BIGINT,
    nss: DataTypes.BIGINT,
    instansiPemberiIzin: DataTypes.STRING,
    nomorSuratIzin: DataTypes.STRING,
    tglSuratIzin: DataTypes.STRING,
    akreditasi: DataTypes.STRING,
    angkaAkreditasi: DataTypes.INTEGER,
    tahunAkreditasi: DataTypes.INTEGER,
    lembagaMenaungi: DataTypes.STRING,
    subRayon: DataTypes.INTEGER,
    npsn: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sekolah',
  });
  return sekolah;
};